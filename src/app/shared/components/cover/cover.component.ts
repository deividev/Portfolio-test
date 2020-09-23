import { Component, OnInit } from '@angular/core';
import { faHtml5, faCss3Alt, faJs, faAngular, faVuejs, faBootstrap, faNode, faDigitalOcean, faSass, faGitAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faSass = faSass
  faJs = faJs
  faAngular = faAngular
  faVue = faVuejs
  faBootstrap = faBootstrap
  faNode = faNode
  faDigitalOcean = faDigitalOcean

  faGit = faGitAlt

  isActive = true;
  constructor() { }

  ngOnInit(): void {

  }

}
