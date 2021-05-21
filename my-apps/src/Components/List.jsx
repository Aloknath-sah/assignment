import React from "react";
import styles from './Card.module.css';

const List = props => {
    return (
        <div>
            <div key={props.id} className={styles.card}>
                        <img width="300px" src={props.imageUrl} alt="icon"/>
                        <div>
                            <h3 className={styles.names}>{props.name} </h3>
                            <p><b>{"average_cost_for_two: "}</b> {props.cost} </p>
                            <p><b>{"Cuisines: "}</b> {props.cuisine} </p>
                            <p><b>{"Place: "}</b> {props.place} </p>
                        </div>
                        <h2 className={styles.rating}><b>{"Rating"}</b> {props.rating} </h2>
                        
                    </div>
        </div>
    );
};

export default List;
