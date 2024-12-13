'use client'

export default function MainLogin() {
    return (
        <div className="login_wrap">
            <div className="login_inner">
                <div className="loginContent">
                    <div className="loginContent_inner">
                        <img src="/image/logo.svg" />
                        <div className="inputBox">
                            <input name="user_id" type="text" placeholder="아이디를 입력하세요" />
                            <input name="user_pw" type="password" placeholder="비밀번호를 입력하세요" />
                        </div>
                        <button type="submit">로그인</button>
                        <ul>
                            <li>
                                <Link href={'/'}>아이디/비밀번호 찾기</Link>
                            </li>
                            <li>
                                <Link href={'/'}>회원가입</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}