import './App.scss';

import React from "react";
import { Button } from "./Components/Button";
import { Modal } from "./Components/Modal";

export class App extends React.Component {

  state={ 
    isModalFirstActive: false, 
    isModalSecondActive: false, 
  }

  render() {
    return (
      <>
        <div className='nav'>
          <Button 
            text={"Onen first modal"}
            bgColor="#5cffb3"
            handleClick={() => {
              this.setState({isModalFirstActive: true})
            }}
          />

          <Button 
            text={"Onen second modal"}
            bgColor="#83f1ff"
            handleClick={() => {
              this.setState({isModalSecondActive: true})
            }}
          />
        </div>

        <div className='content'>
          {this.state.isModalFirstActive && 
          < Modal 
          headerText={"Do you want to delete this file?"}
          bodyText={"Once you delete this file, it won't be possible to undo this action. Are you sure to delete it?"}
          actions={ <>
                      <Button 
                        text={"Ok"} 
                        bgColor="#990000"
                        handleClick={() => {
                          this.setState({isModalFirstActive: false})
                        }}                    
                      />
                      <Button 
                        text={"Cancel"}
                        bgColor="#990000"
                        handleClick={() => {
                          this.setState({isModalFirstActive: false})
                        }}
                      /> 
                    </> }
            handleCloseModal={() => {
              this.setState({isModalFirstActive: false})
            }}
            isCloseButton={true}
            />}

          {this.state.isModalSecondActive && 
          < Modal 
            headerText={"Hello! This is second Modal window"}
            bodyText={"There aren't any buttons"}
            isCloseButton={false}
            handleCloseModal={() => {
              this.setState({isModalSecondActive: false})
            }}
            className="secondModal"
          />}

        </div>
      </>
    )
  }
}