import React, { Component } from 'react';

class Search extends Component {    
    render() { 
        const {handleChange,handleSubmit, search} = this.props;
        return ( <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="primary text-capitalize">
                            search recipes with 
                            {' '}
                            <strong className="text-red">Food2Fork</strong>
                        </h1>
                        <form action="" className="mt-4">
                            <label htmlFor="search" className="text-capitalize">
                                type recipes separated by comma
                            </label>
                            <div className="input-group">
                                <input 
                                type="text" 
                                name='search'
                                className="form-control"
                                placeholder='chicken,cheese,qinoa'
                                value = {search}
                                onChange= {handleChange}
                                />
                                <div className="input-group-append">
                                    <button 
                                    type = 'submit'
                                    className="input-group-text bg-primary text-white"
                                    onClick={handleSubmit}
                                    >
                                    <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            </>
            );
    }
}
 
export default Search;