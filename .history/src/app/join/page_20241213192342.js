export default function join() {
    return (
        <div className="join">
            <div className="join_inner">
                <div className="title_banner">
                    <div className="title_banner_inner">
                        <h2>싸이월드 회원가입하기</h2>
                        <div className="icon">
                            <img src="/image/illustration1.gif" />
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_content">
                        <h2>회원정보입력</h2>
                        <h4>회원님의 정보를 입력해주세요.</h4>
                        <div className="joinInpt_box">
                            <ul>
                                <li>
                                    <span>아이디</span>
                                    <input placeholder="아이디를 입력해주세요" />
                                </li>
                                <li>
                                    <span>이메일</span>
                                    <input placeholder="이메일을 입력해주세요"/>
                                </li>
                                <li>
                                    <span>비밀번호</span>
                                    <input />
                                </li>
                                <li>
                                    <span>비밀번혿 확인</span>
                                    <input />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}