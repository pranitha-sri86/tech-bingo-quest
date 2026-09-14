import "./AdminHeader.css";

function AdminHeader() {

    return (

        <div className="admin-header">

            <div>

                <h1>

                    Tech Bingo Quest

                </h1>

                <p>

                    Administrator Dashboard

                </p>

            </div>

            <div className="status">

                <span className="status-dot"></span>

                Waiting For Event

            </div>

        </div>

    );

}

export default AdminHeader;