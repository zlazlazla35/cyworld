'use client'

import { useEffect, useState } from "react"

export default function join() {
    let [userEmail, setUserEmail] = useState('');
    var resultDiv = document.getElementById('id_check');


    function emailCheck(email_address) {
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if (!email_regex.test(email_address)) {
            return false;
        } else {
            return true;
        }
    }
    function validateEmail() {

        var email = userEmail;

        if (emailCheck(email)) {
            console.log('유효한 이메일 주소입니다.')
            resultDiv.innerHTML = '유효한 이메일 주소입니다.';
        } else {
            console.log('유효하지 않은 이메일 주소입니다.')
            resultDiv.innerHTML = '유효하지 않은 이메일 주소입니다.';
        }
    }

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
                                    <input name="user_id" placeholder="아이디를 입력해주세요" />
                                </li>
                                <li>
                                    <span>이메일</span>
                                    <input name="user_name" placeholder="이메일을 입력해주세요" onChange={(e) => {
                                        setUserEmail(e.target.value);
                                        validateEmail();
                                    }} />
                                    {
                                        // userEmail !== '' &&  pass ? '유효한 이메일임' : '유효하지 않은 이메일임'
                                        // userEmail !== '' ?  <p id="id_check">유효하지 않은 이메일임</p> : null
                                    }
                                    <div id="id_check">유효하지 않은 이메일임</div>
                                    
                                </li>
                                <li>
                                    <span>비밀번호</span>
                                    <input name="user_email" placeholder="비밀번호를 입력해주세요" />
                                </li>
                                <li>
                                    <span>비밀번호 확인</span>
                                    <input placeholder="비밀번호를 입력해주세요" />
                                </li>
                            </ul>
                        </div>
                        <div className="btnBox">
                            <button>이전</button>
                            <button className="complete" type="submit" onClick={() => {   }}>회원가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}