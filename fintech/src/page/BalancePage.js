import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import BalanceCard from '../components/balance/BalanceCard'
import AppBar from '../components/common/AppBar'
import axios from 'axios'
import TransactionList from '../components/balance/TransactionList';

const BalancePage = () => {

    //url QueryString : fintechUseNo=199159919057870978216487
    //const queryStringValue = useLocation().search;
    //const queryStringObj = queryString.parse(queryStringValue);
    //const fintechUseNo = queryStringObj.fintechUseNo;

    //console.log(useLocation().search)
    const [account, setAccount] = useState([])
    const { fintechUseNo } = queryString.parse(useLocation().search);
    const accessToken = localStorage.getItem('accessToken');
    const [transactionList, setTransactionList] = useState([]);

    useEffect(()=>{
        getBalance();
        getTransctionList();
    },[])  

    const genTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202200996U" + countnum; //이용기관번호 본인것 입력
        return transId;
    };
    
    const getBalance = () =>{
      //계좌 잔액 조회 API 호출
        const sendData = {
            bank_tran_id : genTransId(),
            fintech_use_num : fintechUseNo,
            tran_dtime : 20220519180000
        }

        const option = {
            method : "GET",
            url: `/v2.0/account/balance/fin_num`,
            headers: {
                Authorization : `Bearer ${accessToken}`
            },
            params : sendData
        }
        
        axios(option).then(({data}) => {
            setAccount(data)
        })
        
    }

    const getTransctionList = () => {
        const sendData = {
            bank_tran_id : genTransId(),
            fintech_use_num : fintechUseNo,
            inquiry_type : "A",
            inquiry_base : "D",
            from_date : 20220517,
            to_date : 20220519,
            sort_order : "D",
            tran_dtime : 20220519180000
        }

        const option = {
            method : "GET",
            url: `/v2.0/account/transaction_list/fin_num`,
            headers: {
                Authorization : `Bearer ${accessToken}`
            },
            params : sendData
        }
        
        axios(option).then(({data}) => {
            setTransactionList(data.res_list);
            console.log(data)

            console.log(transactionList);
            console.log(transactionList.length)
        })
    }

    
    return (
        <>
            <AppBar title={"잔액조회"}/>
            <BalanceCard bankName={account.bank_name} fintechNo={account.fintech_use_num} balance={account.balance_amt}></BalanceCard>
            <TransactionList transactionList={transactionList}></TransactionList>
        </>
    )
}

export default BalancePage