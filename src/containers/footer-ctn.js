import Footer from '../components/footer'
import filterTodo from '../actions/filter-todo'
import {connect} from 'react-redux'

let mapStateToProps = (state, ownProps) => ({
  activedFilter: state.filter
})

let mapDispatchToProps = (dispatch, ownProps) => ({
  activeFilter: (filter) => dispatch(filterTodo(filter))
})

let FooterCtn = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterCtn