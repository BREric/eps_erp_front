import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupCarousel();
  }

  setupCarousel(): void {
    const indicators = document.querySelectorAll('.conteCarrouselController a');
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', (e) => {
        e.preventDefault();
        const activeElement = document.querySelector('.itemCarrousel.active');
        if (activeElement) {
          activeElement.classList.remove('active');
        }
        const newActiveElement = document.querySelector(`.itemCarrousel:nth-child(${index + 1})`);
        if (newActiveElement) {
          newActiveElement.classList.add('active');
        }
      });
    });
  }

}
