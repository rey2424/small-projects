import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'
import { setSearchField, requestPeople } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchPeople.searchField,
        people: state.requestPeople.people,
        isPending: state.requestPeople.isPending,
        error: state.requestPeople.error
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPeople: () => dispatch(requestPeople())
}
}


class App extends Component {

    componentDidMount() {
      this.props.onRequestPeople();
    }

    render(){
        
        const {searchField, onSearchChange, people, isPending} = this.props;
    
        const filterPeople = people.filter(person => {
            return person.name.toLowerCase().includes(searchField.toLowerCase());
        })
       
        return isPending ?
            <h1>Loading</h1> :
        (
        
        <div className='tc'>
        <h1 className='f1'>Random Avatar Generator</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
            <CardList people = {filterPeople} />
            </ErrorBoundry>
        </Scroll>
        </div>

         );
}
}



//exporting
export default connect(mapStateToProps, mapDispatchToProps)(App);
