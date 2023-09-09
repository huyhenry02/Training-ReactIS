import React, { Component } from 'react';
import Form from "./component/Form";
import Control from "./component/Control";
import ListStudent from "./component/ListStudent";

class App extends Component {
    constructor(props) {
        super(props);
    //     khởi tạo state chứa mock data danh sách sinh viên
        this.state = {
            students:[
                {studentId:'SV0001',studentName:"Nguyen Van A", age:20, sex:true, birthDate:'2000-04-16',birthPlace:'Hà nội',address:'HN'},
                {studentId:'SV0002',studentName:"Nguyen Van b", age:20, sex:true, birthDate:'2000-04-16',birthPlace:'Hà nội',address:'HN'},
                {studentId:'SV0003',studentName:"Nguyen Van c", age:20, sex:true, birthDate:'2000-04-16',birthPlace:'Hà nội',address:'HN'},
            ]
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-7 grid-margin stretch-card">
                    <div className="card">
                        {/*Control start*/}
                        <Control/>
                        {/*Control end*/}
                        {/*ListStudent start*/}
                        <ListStudent students={this.state.students}/>
                        {/*ListStudent end*/}
                    </div>
                </div>
                {/*Form Start*/}
                <Form/>
                {/*Form End*/}
            </div>
        );
    }
}
export default App;
