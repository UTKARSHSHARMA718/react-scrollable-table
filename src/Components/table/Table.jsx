import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchBar from "../searchBar/SearchBar";
import { FormControlLabel, Switch } from "@mui/material";
import "./Table.css";
// import data from "./MOCK_DATA.json";
// const allUsers = data.slice(0, 100);

let allUsers = [];
const Table = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        allUsers = data.users;
        setUsers(allUsers);
        // console.log(allUsers)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [disableUsers, setDisableUsers] = useState([]);

  const onHandleDisable = (userToBeDisable) => {
    if (!disableUsers.includes(userToBeDisable)) {
      setDisableUsers([...disableUsers, userToBeDisable]);
      return;
    }

    const UpdatedDisableUsersList = disableUsers.filter((user) => {
      return userToBeDisable !== user;
    });
    setDisableUsers(UpdatedDisableUsersList);
  };

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const onHandleUserSearch = (event) => {
    const valueToSearch = event.target.value;
    setSearch(valueToSearch);
    if (valueToSearch.trim().length === 0) {
      setUsers(allUsers);
      return;
    }

    const usersFoundOnSearch = allUsers.filter((user) => {
      return user.firstName
        .toLowerCase()
        .startsWith(valueToSearch.toLowerCase());
    });
    setUsers(usersFoundOnSearch);
  };

  return (
    <>
      <div className="container">
        <div className="table-container">
          <SearchBar
            onHandleUserSearch={onHandleUserSearch}
            search={search}
            setSearch={setSearch}
          />
          {users.length === 0 ? (
            <p className="no-data-text">No data</p>
          ) : (
            <div className="table-wrapper">
              <table className="UserDatatable">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .slice(pagesVisited, pagesVisited + userPerPage)
                    .map((user, index) => {
                      return (
                        <tr
                          key={index}
                          className={
                            disableUsers.includes(user.email)
                              ? "disable-row"
                              : "enable-row"
                          }
                        >
                          <td data-title="First Name" className="firstName">
                            {user.firstName}
                          </td>
                          <td data-title="Last Name" className="LastName">
                            {user.lastName}
                          </td>
                          <td data-title="Email" className="email">
                            {user.email}
                          </td>
                          <td data-title="Age" className="age">
                            {user.password}
                          </td>
                          <td data-title="Status">
                            {user.age > 40 ? (
                              <h3 id="locked-users">Locked</h3>
                            ) : (
                              <FormControlLabel
                                label={
                                  disableUsers.includes(user.email)
                                    ? "Disable"
                                    : "Enable"
                                }
                                control={
                                  <Switch
                                    checked={
                                      disableUsers.includes(user.email)
                                        ? false
                                        : true
                                    }
                                    onChange={() => onHandleDisable(user.email)}
                                  />
                                }
                              />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          )}

          <ReactPaginate
            className={users.length === 0 ? "hidden-btn" : ""}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={`paginationBttns`}
            previousClassName={`previousBttn ${
              pageNumber === 0 ? "disable-btn" : ""
            }`}
            nextLinkClassName={`nextBttn ${
              pageNumber === pageCount - 1 ? "disable-btn" : ""
            }`}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
