import React from "react";
import MainMovie from "../../../components/LayoutAdmin/MainMovie";
import fecthMovie from "../../../components/LoaiPhim/PhimDangChieu/modules/action";
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import PageLoading from "../../../components/PageLoading";

function MovieManager(props) {
    const dispatch= useDispatch();
  React.useEffect(() => {
    dispatch(fecthMovie());
  }, []);
  if(props.loading) {
    return <PageLoading />
  }
  return <div className="content__dashboard movie__manager">
      <MainMovie listMovie = {props.listMovie} dispatch={props.dispatch}/>
  </div>;
}

const mapStateToProps = state => {
    return {
        listMovie: state.fechMovieReducer.data,
        loading: state.fechMovieReducer.loading,
    }
}

export default connect(mapStateToProps)(MovieManager);
