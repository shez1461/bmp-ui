import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <footer class="created-by">Copyright © 2021 <a href="https://bamboosystems.io/" target="_blank">Bamboo Systems Group.</a> All Rights Reserved.<br>
    <a href="mailto:info@bamboosystems.io">info@bamboosystems.io</a> | <a href="https://bamboosystems.io/privacy-policy/" target="_blank">Privacy Policy.</a></footer>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
