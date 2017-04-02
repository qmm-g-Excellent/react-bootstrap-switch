import React, {Component} from 'react';
import Switch from 'react-bootstrap-switch';

export default class CheManagementBoy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {userName: "小马"},
        {userName: "小张"},
        {userName: "小红"}
      ],
      switchValue: []
    };
  }


  handleChange(index) {
    var switchArr = this.state.switchValue;
    switchArr[index] = !switchArr[index];
    this.setState({switchValue: switchArr});
  }

  render() {
    return (
        <div className='che-management-body'>
          <div className='users-table'>
            <table className='table table-bordered table-striped table-hover'>
              <thead>
              <tr>
                <th>姓名</th>
                <th>Che</th>
              </tr>
              </thead>
              <tbody className='table-body'>
              {
                this.state.userList.map((user, index) => {
                  const switchValue = this.state.switchValue[index] === true ? this.state.switchValue[index] : false;
                  return (
                      <tr key={index}>
                        <th>{user.userName}</th>
                        <th>
                          <Switch value={switchValue} size='small' onColor='info'
                                  onChange={this.handleChange.bind(this, index)}/>
                        </th>
                      </tr>
                  );
                })
              }
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}
