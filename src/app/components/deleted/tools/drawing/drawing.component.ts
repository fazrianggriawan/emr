import { Component, OnInit } from '@angular/core';
import { CanvasWhiteboardComponent, CanvasWhiteboardOptions } from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  viewProviders: [CanvasWhiteboardComponent],
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {

    canvasOptions: CanvasWhiteboardOptions = {
        drawButtonEnabled: true,
        drawButtonClass: "drawButtonClass",
        drawButtonText: "Draw",
        clearButtonEnabled: true,
        clearButtonClass: "clearButtonClass",
        clearButtonText: "Clear",
        undoButtonText: "Undo",
        undoButtonEnabled: true,
        redoButtonText: "Redo",
        redoButtonEnabled: true,
        colorPickerEnabled: true,
        fillColorPickerText: "Fill",
        strokeColorPickerText: "Stroke",
        saveDataButtonEnabled: true,
        saveDataButtonText: "Save",
        lineWidth: 5,
        strokeColor: "rgb(0,0,0)",
        shouldDownloadDrawing: true
    };


  constructor() { }

  ngOnInit(): void {
  }

}
