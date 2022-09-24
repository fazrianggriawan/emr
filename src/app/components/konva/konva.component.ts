import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Konva from 'konva';
import { ConfirmationService } from 'primeng/api';
import { config } from 'src/app/config';

@Component({
    selector: 'app-konva',
    templateUrl: './konva.component.html',
    styleUrls: ['./konva.component.css'],
    providers: [ConfirmationService]
})
export class KonvaComponent implements OnInit, AfterViewInit {

    public a: any = [];
    public stage: any;
    public group: any;
    public layer: any;
    public imageObj: any;
    public startPos: any;
    public el: any;
    public currentCircle: any;
    public form: any;
    public config: any;

    constructor(
        private confirmService: ConfirmationService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.config = config;
        this.el = document.getElementById('panelInput');

        this.stage = new Konva.Stage({
            container: 'container-konva',
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });

        var self = this;

        this.stage.on('wheel', function (e: any) {
            e.evt.preventDefault();
            const dx = e.evt.deltaX;
            const dy = e.evt.deltaY;

            const minX = -(self.stage.width());
            const maxX = 0;

            const x = Math.max(minX, Math.min(self.group.x() - dx, maxX));

            const minY = -(self.stage.height());
            const maxY = 0;

            const y = Math.max(minY, Math.min(self.group.y() - dy, maxY));
            self.group.position({ x, y });
            self.hideInputPanel();

        });

        this.layer = new Konva.Layer();
        this.group = new Konva.Group({ draggable: true });

        this.form = this.fb.group({
            lokasi: [null],
            keterangan: [null]
        })
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            var element = document.getElementById("container-konva");
            this.startPos = { x: element?.offsetLeft, y: element?.offsetTop }
        }, 500);
    }

    public rebuild(imgSrc: string) {
        this.a = [];
        this.stage.destroyChildren();
        this.group.position(0, 0);

        this.getImage(imgSrc);
        this.layer.add(this.group);
        this.stage.add(this.layer);
    }

    public getImage(imgSrc: string) {

        var self = this;

        Konva.Image.fromURL(imgSrc, function (img: any) {
            img.on('click', function (e: any) {
                if (self.el.style.display == 'unset') {
                    self.hideInputPanel();
                } else {
                    var circle = self.addCircle(e);
                    self.group.add(circle);
                    let b = {
                        i: self.a.length + 1,
                        x: circle.attrs.x,
                        y: circle.attrs.y
                    }
                    circle.attrs.content = { lokasi: '', keterangan: ''}
                    self.a.push(circle.attrs);
                    console.log(self.a);
                }
            })
            self.group.add(img);
        })
    }

    public addCircle(e: any) {
        var gc = new Konva.Group({
            x: e.evt.clientX - this.startPos.x,
            y: e.evt.clientY - this.startPos.y,
            offsetX: this.group.x(),
            offsetY: this.group.y(),
            draggable: true,
            id: String(this.a.length + 1),
            idx: (this.a.length > 0) ? this.a.length : 0
        })

        var circle = new Konva.Circle({
            height: 25,
            width: 25,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 2
        })

        var posX = -4;
        if (this.a.length >= 9)
            posX = -9

        var text = new Konva.Text({
            x: posX,
            y: -6,
            text: this.a.length + 1,
            fill: 'black',
            fontStyle: 'bold',
            fontSize: 16
        })

        var self = this;

        gc.on('mouseup', function (e) {
            self.currentCircle = e.currentTarget.attrs;
            self.showInputPanel(e);
        })

        gc.on('mouseenter', function () {
            self.stage.container().style.cursor = 'pointer';
            circle.fill('lightblue')
        });

        gc.on('mouseleave', function () {
            self.stage.container().style.cursor = 'default';
            circle.fill('yellow')
        });

        gc.add(circle, text);

        this.currentCircle = gc.attrs;

        this.showInputPanel(e);

        return gc;
    }

    public editCircle() {

    }

    public showInputPanel(e: any) {
        this.el.style.position = 'absolute';
        this.el.style.left = String(e.evt.clientX - this.startPos.x + 20) + 'px';
        this.el.style.top = String(e.evt.clientY - this.startPos.y + 80) + 'px';
        this.el.style.display = 'unset';
    }

    public hideInputPanel() {
        this.form.reset();
        this.el.style.display = 'none';
    }

    public downloadURI(uri: string, name: string) {
        var link: any = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    public saveImage() {
        var dataURL = this.group.toDataURL({ pixelRatio: 1, mimeType: 'image/jpeg', quality: 1 });
        this.downloadURI(dataURL, 'group.png')
    }

    public save() {
        let node = this.group.find('#'+this.currentCircle.id);
        let idx = node[0].attrs.idx;
        this.a[idx].content = this.form.value;
        this.hideInputPanel();
    }

    public deleteNode(event: Event) {
        this.confirmService.confirm({
            message: 'Anda yakin ingin menghapus?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                let g = this.group.find('#'+this.currentCircle.id);
                g[0].destroy();

                let index = this.a.findIndex( (item: any) => item.id == this.currentCircle.id);
                this.a.splice(index, 1);

                this.hideInputPanel();
            }
        });
    }

}
