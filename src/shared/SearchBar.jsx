import React , {useRef} from "react";
import './searc-bar.css'
import {Col, Form, FormGroup} from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('')

    const searchHandler = ()=>{
        const location = locationRef.current.value



        if(location === ''){
            return alert('All fiels are required')
        }
    }

    return <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where do you want to go" ref={locationRef}></input>
                    </div>
                </FormGroup>

                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                    </span>
            </Form>
        </div>
    </Col>
}

export default SearchBar;