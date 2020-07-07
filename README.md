# responsive

This is my example of the responsive method, by <a href="http://www.massimoceron.it" target="_blank">massimoceron.it</a><br>
👉 <a href="http://ceron.altervista.org/corso-web-2.0/my-site/erika/responsive-vf-base-lezione-20/index.html" target="_blank">Here's</a> the finally result. 
<br>

# description (in Italian 🇮🇹)

 <p>Nel 2019 e&grave; fondamentale che un sito Internet sia responsive, ossia possa essere visualizzato da diversi dispositivi. A maggior ragione che - stando alle statistiche - la visualizzazione di portali web via tablet e soprattutto smartphone ha superato quella da pc.</p>
<p>Ma come va costruito un sito con queste caratteristiche?</p>
<p>Qualunque sia il livello del progetto, è importante decidere sin dal principio quale approccio si desideri utilizzare tra i due che seguono:<br><br>
1- <b>content first (prima i contenuti)</b>: in questo caso la gestione dei contenuti deve essere fulcro centrale nell’affrontare un progetto.<br>I contenuti non sono solamente le immagini, i testi e gli elementi multimediali che costituiscono la base del sito, ma anche il logo, il menu di navigazione principale, le sezioni secondarie, i moduli per la ricerca sul sito, le inserzioni pubblicitarie, etc. <br>Fondamentale è porsi le domande giuste in fatto di strategia per la gestione dei contenuti, passando dal “cosa” (quali contenuti) al “come” (tecniche e modalità di presentazione degli stessi).<br>

2- <b>mobile first (prima il mobile)</b>: secondo questo approccio, nella progettazione del sito, è necessario partire dalla strutturazione dei contenuti per lo schermo limitato nelle dimensioni dei dispositivi mobili. <br>Non si parte, quindi, da un layout e da un set di funzionalità concepiti per il desktop per poi adattarli per il mobile. Al contrario, si parte dai limiti posti dai dispositivi mobili per concentrarsi al meglio sui contenuti essenziali, per poi arricchire il tutto sui dispositivi più capaci, man mano che aumentano le dimensioni dello schermo (ma anche la potenza dell’hardware).<br>

Qualunque sia il punto di vista che si sceglie di seguire, è necessario definire anzitutto i breakpoints del sito attraverso le media queries, ossia i cosiddetti punti di rottura, che tendenzialmente sono per poter visualizzare correttamente il sito con <i>smartphone</i>, <i>tablet</i> e <i>dekstop</i> per pc.</p>
<p>Questo esempio e&grave; costruito sulla base di queste specifiche, e quindi:<br>- con un layout per tablet definito dalle regole css
<i>@media only screen and (min-width:768px) and (max-width:991px)</i>;
<br>- con un layout per mobile, definito dalle regole css <i>@media only screen and (max-width:480px)</i> ,<br>oltre a quello per desktop per pc.<br>La galleria di immagini e&grave; implementata con il <a href="https://github.com/woocommerce/FlexSlider" target="_blank">Flexslider</a>, uno slider Responsive basato sulla libreria jQuery e che puo&grave; essere installato seguendo la procedura disponibile a <a href="http://www.thomasmoore.it/webdesign/js/flexslider.asp" target="_blank">questo</a> link.</p>
