import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPens } from '../ducks/myform';

// import our presentation components
import Stage1 from '../components/myform/Stage1';
import Stage2 from '../components/myform/Stage2';
import Stage3 from '../components/myform/Stage3';
import Stage4 from '../components/myform/Stage4';
import Sidebar from '../components/myform/Sidebar';

// this is a container component as its the component that is connected to redux
// leaving the remaining components to be dump presentational componenst being passed data and functionaility via props.
class Home extends React.Component {

    constructor(props) {

        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.goToPage = this.goToPage.bind(this);

        this.state = {
            page: 1,
            numPages: 4
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        window.alert(JSON.stringify(this.props.form.myform.values, null, 2));
    }

    goToPage(page) {
        this.setState({ page });
    }

    nextPage() {

        // very rough, only for prototyping quickly

        let next = this.state.page + 1;
        this.setState({ page: next });

    }

    previousPage() {
        let previous = this.state.page - 1;
        this.setState({ page: previous });
    }

    render() {

        const { page } = this.state;

        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-12">
                        <h1>A wee Redux Form</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6">

                        <ul className="breadcrumb">
                            <li><a href="#" onClick={() => this.goToPage(1)}>Stage 1</a></li>
                            <li><a href="#" onClick={() => this.goToPage(2)}>Stage 2</a></li>
                            <li><a href="#" onClick={() => this.goToPage(3)}>Stage 3</a></li>
                            <li><a href="#" onClick={() => this.goToPage(4)}>Stage 4</a></li>
                        </ul>

                        {page === 1 &&
                            <Stage1 onSubmit={this.nextPage} />
                        }
                        {page === 2 &&
                            <Stage2
                                previousPage={this.previousPage}
                                onSubmit={this.nextPage}
                            />
                        }
                        {page === 3 &&
                            <Stage3
                                previousPage={this.previousPage}
                                onSubmit={this.nextPage}
                                actions={this.props.actions}
                                data={this.props.stage3}
                            />
                        }
                        {page === 4 &&
                            <Stage4
                                previousPage={this.previousPage}
                                handleSubmit={this.handleSubmit}
                                summary={this.props.form.myform.values}
                            />
                        }

                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <Sidebar data={this.props.form.myform} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        something: state.something,
        stage3: {
            pens: state.something.pens
        },
        form: state.form
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators({
            fetchPens
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
