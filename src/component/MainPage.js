

function MainPage() {
    return (
        <div id="wrapper">
            <section className="intro">
                <header>
                    <h1>김건영 POTOFOLIO</h1>
                    <p>경력기술서 및 포토폴리오 <a href="https://github.com/Geon0">@github</a> / <a
                        href="https://www.instagram.com/kimgeon_0/">@instagram</a></p>
                    <ul className="actions">
                        <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
                    </ul>
                </header>
                <div className="content">
                    <span className="image fill" data-position="center"><img src="images/pic01.jpg" alt=""/></span>
                </div>
            </section>
            <section id="first">
                <header>
                    <h2>주요 경력</h2>
                </header>
                <div className="content">
                    <p><strong>팝스라인</strong> 미디어아트 회사 (2022.03 - 2023.05)
                    </p>
                    <ul className="feature-icons">
                        <li className="icon solid fa-laptop">Mac, Linux</li>
                        <li className="icon solid fa-code">Php, React, React-Native</li>
                    </ul>
                    <p>크로스플랫폼 React-native 앱 출시
                        <br/>
                        NFT 거래소 metaversero 운영</p>
                    <div className="content">
                        <p><strong>(주)날리지큐브</strong> 기업용 포털 서비스 (2020.12 - 2022.03)
                        </p>
                        <ul className="feature-icons">
                            <li className="icon solid fa-laptop">Windows, Linux</li>
                            <li className="icon solid fa-code">Java, Jsp, Spring</li>
                        </ul>
                        <p>기업용 포털 서비스 개발 및 운영</p>
                    </div>
                </div>
            </section>
            <section>
                <header>
                    <h2>프로젝트 경험</h2>
                </header>
                <div className="content">
                    <section>
                        <header>
                            <h3>멀티게임 서버</h3>
                            <p>NodeJs 게임 서버</p>
                        </header>
                        <div className="content">
                            <p>개발 환경
                                mac os, intellij IDE
                                Server : AWS EC2 Ubuntu Linux
                                DB : Mysql

                                <br/>개발 언어 및 라이브러리
                                Front End : Unity
                                Back End : NodeJS, Socket.io
                                <br/>

                                - NodeJS, expressJS 사용 RESTful API 개발
                                <br/>

                                - Socket.io 사용 webSocket 통신 개발</p>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h3>크로스 플랫폼 어플리케이션</h3>
                            <p>위치기반 AR 어플리케이션</p>
                        </header>
                        <div className="content">
                            <p>개발 환경
                                mac os, intellij IDE
                                Server : AWS EC2 Ubuntu Linux
                                DB : Mysql

                                <br/>개발 언어 및 라이브러리
                                Front End : React Native
                                Back End : PHP Laravel Framework
                                <br/>
                                - PHP Laravel Framework 기반 RESTful API 개발
                                <br/>
                                - oauth 2.0 간편 SNS 로그인 기능 구현 (카카오, 네이버)
                                <br/>
                                - S3 BUCKET 이미지 업로드 개발
                                <br/>
                                - 페이징 처리를 위해 redux 사용하여 개발
                                <br/>
                                - Mysql st_distance_sphere 사용 위치기반 서비스 구현
                                <br/>
                                - Stored Procedure 사용으로 네트워크 소요시간 절감 (20%)
                                <br/>
                                - Wikitude 라이브러리 사용하여 AR 기능 구현
                                <br/>
                                - QR Code를 사용하여 보물찾기 기능 DB table 설계</p>
                        </div>
                    </section>
                </div>
            </section>
            <section>
                <header>
                    <h2>현재 구인중입니다!</h2>
                </header>
                <div className="content">
                    <p><strong>발전 가능성</strong>이 높고 멋있게 일할 수 있는 회사를 찾고 있습니다!</p>
                </div>
                <footer>
                    <ul className="items">
                        <li>
                            <h3>Email</h3>
                            <a href="#">kky8809@gmail.com</a>
                        </li>
                        <li>
                            <h3>Phone</h3>
                            <a href="#">010-8809-5380</a>
                        </li>
                        <li>
                            <h3>Address</h3>
                            <span>서울특별시 관악구 신림동</span>
                        </li>
                    </ul>
                </footer>
            </section>
        </div>
    );
}

export default MainPage;
