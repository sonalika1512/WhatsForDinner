// WeeklyMeal.js

import React from "react";
import "./WeeklyMeal.css";

const WeeklyMeal = () => {
  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body" id="weekly-planner-body">
        <div className="container">

          <div className="tile is-ancestor">
            <div className="tile is-parent is-12">
              <div className="tile is-child">
              </div>
              <div className="tile is-child">

                <p className="control">
                  <a id="export" className="button is-primary is-inverted" href="#">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span> Quick Download</span>
                  </a>
                </p>


              </div>
            </div>
          </div>

          <div className="container">
            <article className="tile is-child">
              <table id="weekly-plan" className="table is-striped is-hoverable js-table-data">
                <thead>
                  <tr>
                    <th>
                      {/* Day of the Week */}
                    </th>
                    <th><i className="fas fa-utensils"></i> Recipes</th>
                    <th><i className="far fa-comments"></i> Comments</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
    {/* Monday */}
    <tr className="mealplan-cell" id="row-monday">
        <th>Monday</th>
        <td data-label="Recipe" id="mon-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="mon-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="mon-add" data-action="add" className="has-text-success mon-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="mon-change" data-action="change" className="has-text-warning mon-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="mon-remove" data-action="remove" className="has-text-danger mon-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>

    {/* Tuesday */}
    <tr className="mealplan-cell" id="row-tuesday">
        <th>Tuesday</th>
        <td data-label="Recipe" id="tue-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="tue-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="tue-add" data-action="add" className="has-text-success tue-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="tue-change" data-action="change" className="has-text-warning tue-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="tue-remove" data-action="remove" className="has-text-danger tue-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>

    {/* Wednesday */}
    <tr className="mealplan-cell" id="row-wednesday">
        <th>Wednesday</th>
        <td data-label="Recipe" id="wed-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="wed-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="wed-add" data-action="add" className="has-text-success wed-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="wed-change" data-action="change" className="has-text-warning wed-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="wed-remove" data-action="remove" className="has-text-danger wed-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>

    {/* Thursday */}
    <tr className="mealplan-cell" id="row-thursday">
        <th>Thursday</th>
        <td data-label="Recipe" id="thu-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="thu-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="thu-add" data-action="add" className="has-text-success thu-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="thu-change" data-action="change" className="has-text-warning thu-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="thu-remove" data-action="remove" className="has-text-danger thu-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>

    {/* Friday */}
    <tr className="mealplan-cell" id="row-friday">
        <th>Friday</th>
        <td data-label="Recipe" id="fri-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="fri-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="fri-add" data-action="add" className="has-text-success fri-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="fri-change" data-action="change" className="has-text-warning fri-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="fri-remove" data-action="remove" className="has-text-danger fri-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>

    {/* Saturday */}
    <tr className="mealplan-cell" id="row-saturday">
        <th>Saturday</th>
        <td data-label="Recipe" id="sat-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="sat-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="sat-add" data-action="add" className="has-text-success sat-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="sat-change" data-action="change" className="has-text-warning sat-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="sat-remove" data-action="remove" className="has-text-danger sat-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>

    {/* Sunday */}
    <tr className="mealplan-cell" id="row-sunday">
        <th>Sunday</th>
        <td data-label="Recipe" id="sun-recipe" className="recipe-link" contentEditable={false}>
            <a href="#" title="recipe-name">
                {/* recipe name */}
            </a>
        </td>
        <td data-label="Comment" id="sun-comment" contentEditable={false}>
            {/* comment */}
        </td>
        <td data-label="Actions" className="day-actions">
            {/* Actions */}
            {/* Add */}
            <a id="sun-add" data-action="add" className="has-text-success sun-actions is-hidden"
                title="Add the details of this meal">
                <i className="fas fa-plus-circle" alt="Add"></i>
            </a>
            {/* Change */}
            <a id="sun-change" data-action="change" className="has-text-warning sun-actions"
                href="#" title="Change the details of this meal">
                <i className="fas fa-pen" alt="Change"></i>
            </a>
            {/* Remove */}
            <a id="sun-remove" data-action="remove" className="has-text-danger sun-actions"
                href="#" title="Remove the details of this meal">
                <span className="remove has-text-danger actions">
                    <i className="fas fa-trash" alt="Remove"></i>
                </span>
            </a>
        </td>
    </tr>
</tbody>
              </table>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeeklyMeal;
