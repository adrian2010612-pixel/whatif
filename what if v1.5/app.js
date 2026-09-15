const imgs={sports:'neymar.png',history:'titanic.png',basketball:'jordan.png',future:'mars.png',technology:'tech-hero.png'};
const scenarios=[
['Football','Neymar never left Barcelona','2017','Imagine Neymar choosing to stay and building his prime years around Messi and Barcelona.','neymar.png'],
['Football','Mbappé stayed at PSG','2024','What if Mbappé remained in Paris and PSG built the next era around him.','neymar.png'],
['Football','Cristiano Ronaldo never left Manchester United in 2009','2009','A different Ronaldo decision could have reshaped United, Real Madrid and European football.','neymar.png'],
['Football','Ronaldinho stayed at Barcelona longer','2008','What if Ronaldinho remained fit, focused and influential at Barcelona for several more seasons.','neymar.png'],
['Football','Arsenal signed Cristiano Ronaldo','2003','A transfer that nearly feels like a football alternate universe: Ronaldo developing in North London.','neymar.png'],
['Football','Liverpool signed Mbappé','2017','What if Liverpool won the race for one of the world’s most explosive young forwards.','neymar.png'],
['Football','Haaland joined Real Madrid instead of Manchester City','2022','A different destination could change the Champions League balance and his partnership options.','neymar.png'],
['Football','Pelé played in today’s football','Today','How might Pelé’s style, scoring and influence translate to modern tactical football.','neymar.png'],
['Football','Ghana reached the 2010 World Cup semi-final','2010','What if Ghana converted the decisive penalty and continued their historic South Africa run.','neymar.png'],
['Football','The Champions League never existed','1955','European club football develops through a completely different competition structure.','neymar.png'],
['Basketball','Michael Jordan was drafted by Portland','1984','The Blazers choose Jordan, creating one of basketball’s biggest alternate timelines.','jordan.png'],
['History','The Titanic never sank','1912','A successful maiden voyage changes White Star Line, maritime safety and the cultural memory of 1912.','titanic.png'],
['History','Napoleon conquered Europe','1810s','A sustained French victory could have redrawn borders, governments and alliances across the continent.','titanic.png'],
['History','The Berlin Wall never fell','1989','A divided Germany could have produced a very different Europe after the Cold War.','titanic.png'],
['History','World War I never happened','1914','Without the First World War, the political chain leading into the 20th century changes dramatically.','titanic.png'],
['History','World War II ended differently','1940s','A different ending would reshape borders, alliances, technology and the postwar order.','titanic.png'],
['History','The Cold War became a direct war','1950s–80s','A direct conflict between superpowers could have changed geopolitics on an enormous scale.','titanic.png'],
['History','The internet was invented in the 1960s','1960s','An earlier public network could accelerate digital culture, business and communication.','tech-hero.png'],
['History','The Library of Alexandria survived','Ancient','A surviving center of scholarship could influence how knowledge moves through later civilizations.','titanic.png'],
['History','Humans reached the Moon in the 1800s','1800s','An impossible-by-modern-understanding leap in engineering creates a radically different industrial age.','tech-hero.png'],
['History','The Wright brothers never invented the airplane','1903','A delayed aviation breakthrough changes warfare, travel and globalization.','tech-hero.png'],
['Technology','Electricity became widespread 100 years earlier','1800s','Earlier electrification could accelerate cities, manufacturing, communications and medicine.','tech-hero.png'],
['Future','Dinosaurs never went extinct','66M years ago','A speculative Earth where non-avian dinosaurs survive into the modern era.','mars.png'],
['Future','Humans evolved alongside dinosaurs','Deep history','An extreme evolutionary alternate timeline with multiple intelligent species.','mars.png'],
['Technology','AI became fully autonomous','2030+','What if AI systems could operate, plan and act with minimal human intervention.','tech-hero.png'],
['Future','Humans lived on Mars','2030+','A permanent human settlement on Mars changes science, economics and identity.','mars.png'],
['Technology','Teleportation became possible','Future','Instant movement could transform transport, borders, logistics and everyday life.','tech-hero.png'],
['Technology','Robots replaced most jobs','Future','Automation reshapes work, education, income and the meaning of a career.','ai.png'],
['Future','Humans discovered alien life','Future','A confirmed discovery of life beyond Earth would change science and culture overnight.','mars.png'],
['Technology','The internet disappeared for one year','Future','Businesses and societies are forced to rebuild around offline systems and local networks.','tech-hero.png'],
['Technology','Unlimited clean energy became available','Future','Cheap abundant energy could transform transport, manufacturing and developing economies.','tech-hero.png'],
['Technology','Self-driving cars became mandatory','Future','Cities redesign roads, ownership and public transport around autonomous vehicles.','cars.png'],
['Future','Humans could live 200 years','Future','Longer lifespans would reshape careers, family structures, housing and retirement.','mars.png'],
['Technology','Virtual reality became indistinguishable from reality','Future','The boundary between physical and digital life almost disappears.','vr.png'],
['Society','Money did not exist','Future','How would people exchange value if traditional money disappeared.','tech-hero.png'],
['Society','Every country used the same currency','Future','A shared currency could simplify trade while creating new economic tensions.','tech-hero.png'],
['Society','There were no national borders','Future','Travel, citizenship and government would operate on a radically different model.','mars.png'],
['Society','School became completely optional','Future','Learning would need to compete with apprenticeships, online education and real-world experience.','tech-hero.png'],
['Society','Everyone received universal basic income','Future','A guaranteed income could change work, entrepreneurship and social safety nets.','tech-hero.png'],
['Society','Social media disappeared','Future','People reconnect through smaller communities, messaging and offline social life.','vr.png'],
['Society','Humans could communicate telepathically','Future','Privacy, relationships and law would all need new rules.','ai.png'],
['Society','Nobody could lie','Future','Politics, advertising, relationships and justice would change in unexpected ways.','tech-hero.png'],
['Society','Everyone had the same amount of wealth','Future','Equal wealth could reduce some inequality while changing incentives and markets.','tech-hero.png'],
['Society','Humans did not need sleep','Future','An extra eight hours every day would transform productivity, nightlife and culture.','vr.png'],
['Formula 1','A Formula 1 title was decided differently','Various','One changed result can alter driver legacies, team strategies and future careers.','cars.png']
];

const categories=['All','Football','Basketball','Formula 1','History','Future','Technology','Society'];
const app={filter:'All',query:''};
const $=s=>document.querySelector(s);
function card(s,i){return `<article class="card" onclick="openScenario(${i})"><div class="card-media" style="background-image:url('${s[4]}')"></div><div class="card-body"><span class="tag">${s[0]}</span><h3>${s[1]}</h3><div class="meta">${s[2]} · 6–10 min read · Explore</div><span class="arrow">→</span></div></article>`}
function renderFilters(){ $('#filters').innerHTML=categories.map(c=>`<button class="filter ${app.filter===c?'active':''}" onclick="setFilter('${c}')">${c}</button>`).join('') }
function render(){renderFilters();const list=scenarios.map((s,i)=>[s,i]).filter(([s])=>(app.filter==='All'||s[0]===app.filter)&&(!app.query||s.join(' ').toLowerCase().includes(app.query.toLowerCase())));$('#scenarioGrid').innerHTML=list.length?list.map(([s,i])=>card(s,i)).join(''):`<div class="empty" style="grid-column:1/-1">No scenarios match that search.</div>`;$('#count').textContent=`${list.length} scenarios`}
function setFilter(c){app.filter=c;render();document.querySelector('#explore').scrollIntoView({behavior:'smooth'})}
function openScenario(i){const s=scenarios[i];const bg=s[4];$('#modal').classList.add('open');$('#modalContent').innerHTML=`<div class="modal-hero" style="background-image:url('${bg}')"><button class="close" onclick="closeModal()">×</button><div class="modal-hero-content"><span class="tag">${s[0]}</span><h1>${s[1]}</h1><div class="meta">${s[2]} · Interactive scenario</div></div></div><div class="article"><p><strong>This is a hypothetical scenario.</strong> It separates the real starting point from the imagined branch and does not claim the outcome would be certain.</p><h2>1. The Real Event</h2><p>${realText(s)}</p><h2>2. The Change</h2><p>${s[3]}</p><h2>3. Alternative Timeline</h2><div class="timeline"><div><div class="label">REAL WORLD</div><p>The original event continues along its known historical or sporting path.</p></div><div><div class="label">WHAT IF</div><p>The key decision changes. Teams, people, technology or societies react to the new situation.</p></div></div><h2>4. What could happen next</h2><p>${s[3]} The most interesting effects would probably appear through second-order consequences rather than one guaranteed ending.</p><h2>5. Why it matters</h2><p>Thinking through alternate outcomes helps compare decisions, understand cause and effect, and see how small moments can create very different futures.</p><div class="quiz"><div class="label">QUICK PREDICTION</div><h3>How likely do you think this timeline is?</h3><button onclick="this.textContent='Plausible — some pieces could happen, but the full chain is uncertain.'">A · Plausible</button><button onclick="this.textContent='Possible — interesting, but dependent on several major changes.'">B · Possible</button><button onclick="this.textContent='Highly speculative — mainly useful as a thought experiment.'">C · Speculative</button></div><h2>Sources</h2><p>For a production version, attach verified sources for the real-world event here. This prototype intentionally does not fabricate citations.</p></div>`}
function realText(s){if(s[0]==='Football')return `The starting point is a real football decision, match, transfer or era. The exact alternate outcome is an educational thought experiment built from that real-world starting point.`;if(s[0]==='History')return `The scenario begins with a real historical period or event. The alternative branch changes one important condition and then explores possible consequences.`;return `The scenario uses a real-world technology, social trend, sporting event or widely documented possibility as its starting point.`}
function closeModal(){$('#modal').classList.remove('open')}
function search(v){app.query=v;render()}
function pitch(){alert('Demo pitch form: in the full product this opens the IdeaHub submission flow.')}
function toggleTheme(){document.body.classList.toggle('light');localStorage.setItem('whatif-theme',document.body.classList.contains('light')?'light':'dark')}
function toggleMenu(){document.querySelector('.navlinks').classList.toggle('show');}
window.openScenario=openScenario;window.closeModal=closeModal;window.setFilter=setFilter;window.search=search;window.pitch=pitch;window.toggleTheme=toggleTheme;window.toggleMenu=toggleMenu;

document.addEventListener('DOMContentLoaded',()=>{if(localStorage.getItem('whatif-theme')==='light')document.body.classList.add('light');render();$('#search').addEventListener('input',e=>search(e.target.value));$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()})});
