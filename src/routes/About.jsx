import { Container, Navbar, Nav, Row, Col, Image } from 'react-bootstrap/';
import { Bookmark, Book } from 'react-bootstrap-icons';
import { Quote, BlockquoteRight } from 'react-bootstrap-icons';

export default function Events() {
    return (
        <Container>
            <div>&nbsp;</div>
            <Row className="justify-content-center text-orange">
                <h3><Bookmark /> &nbsp; About LA-DFW &nbsp; <Bookmark /></h3>
            </Row>
            <div>&nbsp;</div>
            <Row >
                <Col>
                    <Image src={process.env.PUBLIC_URL + '/imgs/j-bapa-about.jpg'} fluid />
                </Col>
                <Col md={6} className="text-justify">
                    <span>
                        Lohana Association of Dallas Fort Worth was founded in 2022. 
                        The goal of our Non-Profit organization is to unite and serve all Lohanas living in DFW metroplex 
                        and to promote and preserve our heritage and language, and bring cultural awareness to future 
                        generations by providing a platform to all of us while serving the community needs.
                    </span>
                    <div>&nbsp;</div>
                    <span>
                        Lohana Association organises activities like picnics, sportings events, festival celebrations and meetups year around 
                        to bring Lohanas of Dallas Fort Worth together. Lohana Association is also proud of providing this 
                        platform for business and entrepreneur to find new opportunities of growth and collabration within the community and beyond. 
                        With large influx of people moving in the North Texas from different part of the United States and the world, 
                        Association is set to grow exponentially year after year.
                    </span>
                </Col>
            </Row>
            <div>&nbsp;</div>
            <Row className="justify-content-center text-orange">
                <h3><Book /> &nbsp; Brief history of Lohana &nbsp; <Book /></h3>
                {/* <h3 className='text-orange'>!! Brief history of Lohana !!</h3> */}
            </Row>
            <div>&nbsp;</div>
            <Row>
                <Col md={10} className="text-justify">
                    <div>
                        <span>
                            From Fa-hien downward all pay tribute to the Lohanas as brave. 
                            A possible reason for the bravery is that they had placed themselves for 
                            centuries in the direct path of invaders from northwest like Persians, Macedonians, 
                            Huns, Mughals, etc.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            Ruling in Afghanistan for many centuries they braved onslaughts of invaders looking for
                            converts in India. From 7th to 11th century A.D., living on the small hills in the
                            northwest which saw hordes of Muslim invaders at the gates of India, the Lohanas
                            fought bravely against these invaders.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                        They held their grounds for long in northwest but finally had to fall back and moved
                        initially to the Sindh province of today's Pakistan. Meanwhile, Prophet Mohammed
                        established Islam. His followers spread out in different directions to preach His religion
                        and in due course they turned towards India too. When these hordes reach northwest,
                        they had to contend with the brave Lohanas and were held back for many years. But
                        finally they lost when one Kualnger of Narsvat community (the Brahmins who
                        performed rites for the Lohanas) betrayed Loharana king Chahir Ray. So Sindh fell to
                        Muslims and Lohanas disintegrated into small segments.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                </Col>
                
                <Col md={2}>
                    <Image src={process.env.PUBLIC_URL + '/imgs/dariyalal.jpg'} fluid />
                </Col>
            </Row>
            <Row>
                <Col className="text-justify">
                    <div>
                        <span>
                            But the saga of this brave community did not end there.
                            After the community split, they found a new leader. He
                            was Veer Jashraj, who is revered as Dada Jashraj, who
                            was born in the city of Lohar (today's Lahore in
                            Pakistan), which was the capital of Lohargadh. His
                            domain extended from Lahore to Multan (also in
                            Pakistan today). 
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            As the story goes, Mongol invader Changez Khan,
                            attacked Multan and was killed by Dada Jashraj, Rana
                            of Lohargadh. A plaque in Chinese language on the
                            great Khan's grave says " Killed by Rana Jashraj of
                            Lohergadh". This finds mention in folklore, which say, "
                            King of Mongols was killed by Mirana, the tiger of Multan
                            fort".
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            His descendants who proudly carry the surname of
                            'Mirana' preserve the memory of this great warrior king.
                            He was treacherously killed when only 28 - a life so
                            short but full of heroic deeds. 
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            After the death of Dada Jashraj, the decline of Lohanas
                            began and their reign at Lohargadh ended. At this time,
                            king Dahir ruled at Naryankot (today's Hyderabad in
                            the Sindh province of Pakistan). Disunity among
                            Lohanas weakened his kingdom and he died in a fight
                            with Muslims. The Muslims took over Narayankot and
                            Sindh and the mighty Lohanas fell to a hard time, many 
                            of them having been converted to Islam.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            But again a new ruler came to their aid. His name was Uderalal
                            who is revered as Dariyalal. His father was Ratnarai Thakur, who
                            lived in Nasasrapur, about 90 miles from Hyderabad (Pakistan).
                            Uderlal fought with the Muslim chief Markah and initiated him into
                            the truth of religion. He won freedom for Hindus from Muslims
                            and devoted the rest of his life in the service of humanity. At last
                            he disappeared, entering the earth. Even today he is revered
                            both by Hindus and Muslims who visit the site of his samadhi. In
                            Gujarati, Lohanas performing the puja (ritual worship) of
                            Dariyalal are known as Pujaras and Dariyalal's descendants as
                            Ratnani.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            The Lohanas felt their identity was increasingly threatened in Sindh and they began to
                            migrate towards Kutchchh, Saurashtra and Gujarat. Famous warriors once, they took to
                            trade and business. Their instincts of the warrior past were tested in 1764, when Gulam
                            Shah Kora attacked Kutchchh and they had to account for themselves in the battle of
                            Zora. Lohana women fought alongside their men in this battle and the land of Kutchchh
                            is strewn with memorial stones marking the deaths of brave Lohanas. A saying in
                            Gujarati eulogies Lohana women thus: Only Rajputani, Loharani and Miyanai bring forth
                            gem of children.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            Lohanas are still to be found in Afghanistan and Pakistan, which are now Islamic states.
                            In Afghanistan, they still maintain their religious identity and are known as Lokhathra.
                            The Lohanas who keep their Hindu identity in Sindh are known as Sindhi Lohana.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            Those Lohanas who were converted to Islam are known as Khojas. Many of them retain
                            their Hindu names. The most celebrated among them was the creator of Pakistan,
                            Mohammed Ali Zinnah, whose father's name was Jinabhai Thakkar.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            A few names of the long list are Shri Guru Nanak, Saint Jalaram,
                            Saint Lal Bapu, Yogiji Maharaj, Bhikshu Akhand Anand, Maharishi
                            Priyanath, Thakkar Bapa, Shree Nanjibhai Kalidas Mehta, Seth
                            Shree Virjibhai Maskai, Madhvanis, Vajubhai Kotak, Smarat Ranmal
                            Lakha, Dada Jashraj.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div className='text-center'>
                        <h5>
                            Praising Lohanas, Akha Bhagat said:
                            <div className='text-orange'>
                                <div>&nbsp;</div>
                                <sup className="text-orange"></sup>Thakkars went for name, not for money <br />
                                Worked in front for fame, and did not fail.<sup className="text-orange"></sup>
                            </div>
                        </h5>
                    </div>
                    <div>&nbsp;</div>
                </Col>
            </Row>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </Container>
    );
  }