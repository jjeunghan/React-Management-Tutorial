import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system'; //미사용

const styles = theme => ({  //미사용
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  },  
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이순신',
    'birthday': '123456',
    'gender': '남자',
    'job': '군인'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '슈퍼맨',
    'birthday': '333333',
    'gender': '여자',
    'job': '회사원'
  },
]

class App extends Component {
  render() {
    const { classes } = this.props;  //미사용
    return (
      <Paper>           
      <Table>
          <TableHead>  
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
          </TableHead>
        <TableBody>
          {customers.map(c=> { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default (App)



