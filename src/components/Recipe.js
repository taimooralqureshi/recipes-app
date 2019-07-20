import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Recipe extends Component {
    render() { 
        const {recipe} = this.props;
       
        
        return ( 
            <>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card" style={{height:'100%'}}>
                        <img 
                            src={recipe.image_url}  
                            style = {{height:'14rem'}}
                            alt="recipe" 
                            className="img-card-top"
                            />
                        <div className="card-body text-capitalize">
                            <h6>{recipe.title}</h6>
                            <h6 className='text-warning primary'>
                                provided by {recipe.publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <Link 
                            to={`./recipes/${recipe.recipe_id}`} 
                            className='btn btn-primary text-capitalize'
                            >
                                Details
                            </Link>
                            <a 
                            href={recipe.source_url}
                            target='_black'
                            rel='noopener noreferrer'
                            className='btn btn-success mx-2 text-capitalize'
                            >
                                Recipe Url
                            </a>
                           
                        </div>
                    </div>
                </div>

            </>
            );
    }
}
 
export default Recipe;