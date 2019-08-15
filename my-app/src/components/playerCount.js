import React from 'react'
import {connect} from 'react-redux'
import {Loader} from 'react-loader-spinner'



const playerCount = props => {
    
   return (
       <>
       <h1>hello</h1>
       <button>
           {props.isLoading ? <Loader
         type="TailSpin"
         color="#00BFFF"
         height="100"
         width="100"
      /> : 'Get player count'}
       </button>
       </>
   )
}

const mapStateToProps = state => {
    return {
        test: state.test
    }
    
}

export default connect(mapStateToProps, {})(playerCount)