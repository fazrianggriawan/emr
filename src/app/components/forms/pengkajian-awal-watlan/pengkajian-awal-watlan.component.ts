import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PasienService } from '../../pasien/pasien.service';

@Component({
  selector: 'app-pengkajian-awal-watlan',
  templateUrl: './pengkajian-awal-watlan.component.html',
  styleUrls: ['./pengkajian-awal-watlan.component.css']
})
export class PengkajianAwalWatlanComponent implements OnInit {
  // @ViewChild('lazyLoad', { read: ViewContainerRef })
  // private vcref!: ViewContainerRef;

  constructor(
    private formData: FormBuilder,
    private pasienService: PasienService,
    // private cfr: ComponentFactoryResolver,
  ) { }

  // async loadRencanBerobatComponent(){
  //   this.vcref.clear();
  //   const { RencanBerobatLanjutanFormComponent } = await import('../rencan-berobat-lanjutan-form/rencan-berobat-lanjutan-form.component');
  //   this.vcref.createComponent(
  //     this.cfr.resolveComponentFactory(RencanBerobatLanjutanFormComponent)
  //   );
  // }

  // clearLazyLoad(){
  //   this.vcref.clear();
  // }

  tplKeluhan: any;

  formPengkajian = this.formData.group({
    keluhanUtama: [null],
    keluhanUtamaLain: [null],
    bb: [null],
    tb: [null],
    td: [null],
    nadi: [null],
    p: [null],
    suhu: [null],
    pernahRawat: [null],
    penyakitLalu: [null],
    penyakitLaluYa: [null],
    pernahOp: [null],
    obatKonsumsi: [null]
  })

  formRiwayatKesehatan = this.formData.group({
    penyakitLalu: [null],
    penyakitLaluYa: [null],
    pernahRawat: [null],
    pernahRawatDiag: [null],
    pernahRawatKapan: [null],
    pernahRawatDi: [null],
    pernahOp: [null],
    pernahOpJenis: [null],
    pernahOpKapan: [null],
    obatKonsumsi: [null],
    obatKonsumsiYa: [null],
    penyakitKeluarga: [null],
    penyakitKeluargaYa: [null],
    penyakitKeluargaLain: [null],
    ketergantungan: [null],
    ketergantunganYa: [null],
    ketergantunganLain: [null],
    riwPekerjaan: [null],
    riwPekerjaanYa: [null],
    riwAlergi: [null],
    riwAlergiObat: [null],
    riwAlergiMakanan: [null],
    riwAlergiLain: [null],
    riwAlergiReaksi: [null]
  })

  formRiwayatPsikososial = this.formData.group({
    penyakitLalu: [null],
    penyakitLaluYa: [null],
    pernahRawat: [null],
    pernahRawatDiag: [null],
    pernahRawatKapan: [null],
    pernahRawatDi: [null],
    pernahOp: [null],
    pernahOpJenis: [null],
    pernahOpKapan: [null],
    obatKonsumsi: [null],
    obatKonsumsiYa: [null],
    penyakitKeluarga: [null],
    penyakitKeluargaYa: [null],
    penyakitKeluargaLain: [null],
    ketergantungan: [null],
    ketergantunganYa: [null],
    ketergantunganLain: [null],
    riwPekerjaan: [null],
    riwPekerjaanYa: [null],
    riwAlergi: [null],
    riwAlergiObat: [null],
    riwAlergiMakanan: [null],
    riwAlergiLain: [null],
    riwAlergiReaksi: [null]
  })

  formKebutuhanKomunikasi = this.formData.group({
    hambatanPembelajaran: [null],
    hambatanPembelajaranYa: [null],
    hambatanPembelajaranLain: [null],
    butuhPenerjemah: [null],
    butuhPenerjemahYa: [null],
    bhsInsyarat: [null],
    kesediaanTerimaInfo: [null],
    kebutuhanEdu: [null],
    kebutuhanEduKeperawatan: [null],
    kebutuhanEduLain: [null],
  })

  formResikoJatuh = this.formData.group({
    pasienCaraJalan: [null],
    pasienPegangBenda: [null],
    hasilResiko: [null],
  })

  formStatusFungsional = this.formData.group({
    aktifitasMobilitas: [null],
    aktifitasMobilitasYa: [null],
    alatBantuJalan: [null],
  })

  formSkalaNyeri = this.formData.group({
    nyeri: [null],
    skalaNyeri: [null],
    nyeriKronis: [null],
    nyeriKronisLokasi: [null],
    nyeriKronisFrek: [null],
    nyeriKronisDurasi: [null],
    nyeriAkut: [null],
    nyeriAkutLokasi: [null],
    nyeriAkutFrek: [null],
    nyeriAkutDurasi: [null],
    scoreNyeri: [null],
    menjalar: [null],
    kualitasNyeri: [null],
    faktorMengurangiNyeri: [null],
    faktorMengurangiNyeriLain: [null]
  })

  formNutrisi = this.formData.group({
    pasienTurunBB: [null],
    asupanMakanBerkurang: [null],
    pasienDiagKhusus: [null],
    pasienDiagKhususYa: [null],
    pasienDiagKhususLain: [null],
    totalSkor: [null],
    sudahLaporGizi: [null],
    sudahLaporGiziYa: [null]
  })

  formDaftarDiagnosa = this.formData.group({
    no: [null],
    diagnosa: [null],
    tujuan: [null]
  })

  ngOnInit(): void {
    this.pasienService.getTplKeluhan().subscribe(data => { this.tplKeluhan = data; })
  }

}
