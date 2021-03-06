import { html } from 'lit-element';
import { BapcView } from './rules-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Rules</h1>
      <p>The rules are subject. Keep in mind that, because of the pandemic, it is possible that the format of the contest will change depending on what measures are implemented.</p>
      <h3>Changelog</h3>
<p>The changelog tracks changes from 1st of August 2020 onwards.</p>
<ul>
  <li>[01-08-2020] First version officially online.</li>
  <li>[23-09-2020] Updated contest date, updated rules disclaimer.</li>
  <li>[24-11-2020] Updated contest rules.</li>
</ul>
</section>
<section>
<h3 >General Rules</h3>

<h4 >Definitions</h4>

<ul>
  <li>BAPC: The Benelux Algorithm Programming Contest 2020. It will take place on December 12th, 2020 and is hosted by the Delft University of Technology.</li>
  <li>Organisation: the members of the organising committee.</li>
  <li>Website: The website, maintained by the organisation and available at <a href="https://2020.bapc.eu/">2020.bapc.eu</a>.</li>
  <li>Jury: The group of people responsible for making the problems and checking the solutions submitted by the participants.</li>
  <li>Technical staff: The group of people responsible for the system (the digital environment, jury system, printing, etc.).</li>
  <li>Runners: Volunteers responsible for delivering print-outs, answering questions and various other tasks supervised by the organisation.</li>
  <li>Crew: Organisation, members of the jury, tech and runners.</li>
  <li>Participant: Member of a participating team that competes in the BAPC.</li>
  <li>Run: The submission of a solution by a team.</li>
  <li>Institution: A university (of applied sciences) in the Benelux.</li>
</ul>

<h4 >Organisation</h4>

<ul>
  <li>The organisation consists of students and alumni of the Delft University of Technology.</li>
  <li>The organisation has formed a jury which consists of students, the staff of different universities, and professionals from industry.</li>
  <li>The organisation has formed a technical staff, a group which consists of students, alumni and faculty of the Delft University of Technology.</li>
  <li>The organisation will appoint runners who will support the organisation, tech and jury during the contest.</li>
</ul>
</section>
<section>
<h3 >Participation</h3>

<h4 >Introduction</h4>

<ul>
  <li>Participation is only possible in teams of 3 persons.</li>
  <li>There are two team classifications: one for student teams and one for business teams.</li>
  <li>Changing the composition of a team is only possible with the permission of the organisation and only before the start of the contest. Substitutions should be registered as a reserve.</li>
  <li>The organisation decides how many teams from each institution are allowed to compete. The organisation will consider the number of interested contestants from each institution.</li>
  <li>The organisation has the right to deny the participation of teams before the start of the contest.</li>
</ul>

<h4>Photos and videos</h4>

<ul>
	<li>There might be a public livestream of the award ceremony available on the website. The recording will be publicly available afterwards too. If you do not want to appear on this livestream or want to be removed from the footage afterwards, please contact the organization.</li>
</ul>

<h4 >Student teams</h4>
<p>A student team:</p>

<ul>
  <li>May participate for free.</li>
  <li>Exists of students from the same institution and who are not participating in another team. The institutions must be located in either Belgium, Luxembourg or The Netherlands.</li>
  <li>Has a coach, which is the contact person of a team. This can be a team member or a student or faculty member of the institution.</li>
  <li>Participates in the student teams pool for the title “Winner of the Benelux Algorithm Programming Contest 2020”.</li>
  <li>Consists of students who are eligible for the <a href="https://2020.nwerc.eu/rules/">North Western European Programming Contest 2020.</a></li>
</ul>

<h4 >Business teams</h4>
<p>A business team:</p>

<ul>
  <li>Consists up to 3 persons who are employed by the same company or institution.</li>
  <li>Participates in the business teams pool for the title “Winner of the Benelux Algorithm Programming Contest 2020”.</li>
</ul>
</section>
<section>
<h3 >The Contest</h3>

<h4 >Introduction</h4>

<ul>
  <li>The language of the contest is English. All written contest materials will be in English.</li>
  <li>The contest lasts for 5 hours.</li>
  <li>From the beginning until one hour before the end of the BAPC, the scores are displayed.</li>
</ul>

<h4 >Problems</h4>

<ul>
  <li>At least six problems will be posed. So far as possible, problems will avoid dependence on detailed knowledge of a particular applications area or a particular contest language.</li>
  <li>A contestant may submit a claim of ambiguity or error in a problem statement by submitting a clarification request to a judge. If the judges agree that an ambiguity or error exists, a clarification will be issued to all contestants.</li>
  <li>The jury has the right to change or withdraw problems during the contest. When this happens the jury will inform all teams.</li>
</ul>

<h4 >System</h4>

<ul>
  <li>Each team will use at most three workstations, i.e. at most one computer per team member.</li>
  <li>A solution for a problem has to be written in C99, C++ (version 14 or later will be available), Python (versions 3 will be available), Java (version 11 or later) or Kotlin (version 1.3), unless the problem statement explicitly states otherwise. Business teams can request other submission languages, on which the organisation will decide whether it will be made available for submission.</li>
  <li>A team is disqualified if they submit harmful code that disrupts the contest</li>
  <li>For every solution, only the standard library of the chosen language may be used, i.e. no other function calls can be made.</li>
  <li>There is no explicit restriction on internet access during the contest. However, the organisation discourages copying code from reference materials as solutions will be checked on similarities. If there is suspicion of plagiarism among teams, both teams are subject to disqualification.</li>
</ul>

<h4 >Judgement</h4>

<ul>
  <li>Each run is judged as accepted or rejected by a judge, and the team is notified of the results.</li>
  <li>For each problem, the jury has a correct solution and test data.</li>
  <li>A problem is solved when it is accepted by the judges. The judges are solely responsible for accepting or rejecting runs.</li>
  <li>The winner of the pool is decided by (in order):
    <ol>
      <li>The team with most correctly solved problems.</li>
      <li>The team with the least total time. The total time is the sum of the time elapsed from the beginning of the contest to the submission of the accepted run plus 20 penalty minutes for every rejected run for that problem regardless of the submission time. There is no time consumed for a problem that is not solved.</li>
      <li>The team that first submitted its last accepted problem is ranked higher. In case a tie still remains, the team that first submitted its second-last accepted problem is ranked higher, and so on. In the event that this does not resolve the tie, the ranks will be determined by chance.</li>
    </ol>
  </li>
  <li>The jury is responsible for everything that has to do with the problem set and can be contacted for this through the “clarification requests”.</li>
</ul>
</section>
<section>
<h3 >Special Rules</h3>

<ul>
  <li>A team may be disqualified by the organisation or jury for any activity that jeopardises the contest such as dislodging extension cords, unauthorised modification, unintended use of contest materials, using forbidden function or library calls or distracting behaviour.</li>
  <li>The organisation has the right to stop the contest, extending the contest time, temporarily block submissions for all teams or change the scores in exceptional conditions.</li>
  <li>In situations to which no rule applies or there is ambiguity about the rules, the organisation decides.</li>
  <li>If necessary, the organisation can make changes and exceptions to the rules.</li>
</ul>

        </div>
      </div>
    </section>
  `;
}
