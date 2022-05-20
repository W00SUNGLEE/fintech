import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;


const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  
  const [amount, setamount] = useState("");

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202200996U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setamount(value)
  }

  const handlePayButtonClick = () =>{
    
    const sendData = {
        "bank_tran_id": genTransId(),
        "cntr_account_type": "N",
        "cntr_account_num": "100000000001",
        "dps_print_content": "쇼핑몰환불",
        "fintech_use_num": fintechUseNo,
        "wd_print_content": "오픈뱅킹출금",
        "tran_amt": amount,
        "tran_dtime": "20190910101921",
        "req_client_name": "홍길동",
        "req_client_fintech_use_num": fintechUseNo,
        "req_client_num": "HONGGILDONG1234",
        "transfer_purpose": "TR",
        "recv_client_name": "하하",
        "recv_client_bank_code": "097",
        "recv_client_account_num": "232000067812" 
    }

    const option = {
        method : "POST",
        url: "/v2.0/transfer/withdraw/fin_num",
        headers: {
            Authorization : `Bearer ${localStorage.getItem("accessToken")}`
        },
        data: sendData
    };

    axios(option).then(({data}) => {
        console.log(data)
        deposit();
    })
  }

  const deposit = () =>{
    const twoLeggedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMjAwOTk2Iiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjYwODA0NjI1LCJqdGkiOiIzNWVjMDVlOC1lZjg4LTQzZTAtODRlZS05NmMwZDk5Zjc4ZDQifQ.O4UlRW9sSsuB9KbnO3KmDRkQ4bNIKv6LtILBDjJR4_Y"
        //입금 요청
        const sendData = {
            "cntr_account_type": "N",
            "cntr_account_num": "200000000001",
            "wd_pass_phrase": "NONE",
            "wd_print_content": "환불금액",
            "name_check_option": "off",
            "tran_dtime": "20190910101921",
            "req_cnt": "1",
            "req_list":
            [
                {
                    "tran_no": "1",
                    "bank_tran_id": genTransId(),
                    "fintech_use_num": tofintechno,
                    "print_content": "쇼핑몰환불",
                    "tran_amt": amount,
                    "req_client_name": "홍길동",
                    "req_client_account_num": "00012300000678",
                    "req_client_num": "HONGGILDONG1234",
                    "req_client_bank_code": "097",
                    "transfer_purpose": "TR",
                    "recv_bank_tran_id": genTransId(),
                    "cms_num": "93848103221"
                }
            ]

        }

        const option = {
            method : "POST",
            url: "/v2.0/transfer/deposit/fin_num",
            headers: {
                Authorization : `Bearer ${twoLeggedToken}`
            },
            data: sendData
        };
        //axios
        axios(option).then(({data}) => {
            console.log(data)
        })

  }

  
  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  )
}

export default ModalCard