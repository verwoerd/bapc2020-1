import { html } from 'lit-element';
import { BapcFooter } from './bapc-footer.component';

export default function template(this: BapcFooter) {
  return html`
    <footer>
    <h3>BAPC 2020 is hosted by:</h3>
    <div class="supporters">
    <a href="https://ch.tudelft.nl/"><img src="/images/ch.png" alt="Christiaan Huygens"/></a>
    <a href="http://www.asml.com/students" target="_blank"><img class="tudelft" src="/images/asmlBW.png" alt="ASML"/></a>
    <a href="https://www.imc.com/eu/" target="_blank"><img class="tudelft" src="/images/imcBW.png" alt="imc"/></a>
    <a href="https://careers.bol.com/vacature/it-young-professional/?utm_source=BAPC&utm_medium=website&utm_campaign=events_ityp_2020&utm_term=digital_student_event" target="_blank"><img class="tudelft" src="/images/bolBW.png" alt="bol.com"/></a>
    <a href="https://tudelft.nl/en/"><img class="tudelft" src="/images/tudelft-logo.svg" alt="Delft University of Technology"/></a>
    </div>
</footer>
  `;
}
