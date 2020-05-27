
import { Howl } from 'howler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

export interface Track {
  name: string;
  path: string;
  img: string;
}

@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})
export class PopPage implements OnInit {
  playlist: Track[] = [
    {
      name: 'Blinding Lights - The weeknd',
      path: 'assets/blindinglights.mp3',
      img: 'assets/weeknd.jpeg'
    },
    {
      name: 'Dancing with a stranger - Sam Smith',
      path: 'assets/dwas.mp3',
      img: 'assets/sam.jpeg'
    },
    {
      name: 'Dont start now - Dua Lipa',
      path: 'assets/dontstart.mp3',
      img: 'assets/dua.jfif'
    },  
  ];
  
  activeTrack; Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild ('range', { static: false }) range: IonRange;
  
  constructor() { }

  ngOnInit() {
  }

  start(track: Track){
    if (this.player){
      this.player.stop();
    }
  this.player = new Howl({
    src: [track.path],
    html5: true,
    onplay: () => {
      console.log('onplay');
      this.isPlaying = true;
      this.activeTrack = track;
      this.updateProgress();
    },
    onend: () => {
      console.log('onend');
    },
  });
  this.player.play();
  }
  
  togglePlayer (pause){
  this.isPlaying = !pause;
  if (pause) {
    this.player.pause();
  } else {
    this.player.play();
  }
  }
  
  next(){
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1){
      this.start(this.playlist[index + 1]);
    } else {
        this.start(this.playlist[0]);
      }
  }
  
  prev(){
    let index = this.playlist.indexOf(this.activeTrack);
    if (index>0){
      this.start(this.playlist[index - 1]);
    } else {
        this.start(this.playlist[this.playlist.length-1]);
      }
  }
  
  seek(){
  let newValue = this.range.value;
  let duration = this.player.duration();
  this.player.seek(duration * (newValue as any/ 100));
  } 
  
  updateProgress(){
  let seek = this.player.seek();
  this.progress = (seek / this.player.duration()) * 100 || 0;
  setTimeout(() => {
    this.updateProgress();
  }, 1000)
  }
  
  
}
