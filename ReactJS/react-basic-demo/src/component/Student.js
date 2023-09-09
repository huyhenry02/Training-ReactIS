import React, { Component } from 'react';

class Student extends Component{
    render() {
        let {student,index} = this.props;
        console.log(`Index: ${index}`);
        return(
            <tr>
                <td>{index+1}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.sex?'NAM':'Nữ'}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>

        );
    }
}
export  default Student;