import { Howl } from 'howler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

export interface Track {
  name: string;
  path: string;
  img: string;
}

@Component({
  selector: 'app-rock',
  templateUrl: './rock.page.html',
  styleUrls: ['./rock.page.scss'],
})
export class RockPage implements OnInit {
  playlist: Track[] = [
    {
      name: 'Have you ever seen the rain - Creedence Clearwater',
      path: 'assets/seentherain.mp3',
      img: 'assets/creedence.jfif'
    },
    {
      name: 'Bohemian Rhapsody - Queen',
      path: 'assets/bohemian.mp3',
      img: 'assets/queen.jpeg'
    },
    {
      name: 'We will rock you - Queen',
      path: 'assets/rockyou.mp3',
      img: 'assets/queen1.jpg'
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
