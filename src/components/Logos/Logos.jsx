
import CssLogo from '../../images/CSS-3.svg'
import DjangoLogo from '../../images/Django.svg'
import HtmlLogo from '../../images/HTML-5.svg'
import JavascriptLogo from '../../images/JavaScript.svg'
import MaterializeLogo from '../../images/Materialize.svg'
import SqlLogo from '../../images/Microsoft-sql-server.svg'
import MongoLogo from '../../images/MongoDB.svg'
import NodeLogo from '../../images/Node-JS.svg'
import PostgresLogo from '../../images/PostgreSQL.svg'
import PythonLogo from '../../images/Python.svg'
import ReactLogo from '../../images/React.svg'
import AwsLogo from '../../images/Amazon-aws.svg'
import './Logos.css'

export default function Logos() {
    return (
        <div className="Logos">
            <div className="logos-container">
                <div className="logo-wrapper">
                    <img src={HtmlLogo} alt='HTML Logo' className='logo-item' />
                    <div className="logo-text">HTML</div>
                </div>
                <div className="logo-wrapper">
                    <img src={CssLogo} alt='CSS Logo' className='logo-item' />
                    <div className="logo-text">CSS</div>
                </div>
                <div className="logo-wrapper">
                    <img src={JavascriptLogo} alt='JavaScript Logo' className='logo-item' />
                    <div className="logo-text">JavaScript</div>
                </div>
                <div className="logo-wrapper">
                    <img src={ReactLogo} alt='React Logo' className='logo-item' />
                    <div className="logo-text">React</div>
                </div>
                <div className="logo-wrapper">
                    <img src={NodeLogo} alt='Node.js Logo' className='logo-item' />
                    <div className="logo-text">Node</div>
                </div>
                <div className="logo-wrapper">
                    <img src={MongoLogo} alt='MongoDB Logo' className='logo-item' />
                    <div className="logo-text">MongoDB</div>
                </div>
                <div className="logo-wrapper">
                    <img src={PostgresLogo} alt='PostreSQL Logo' className='logo-item' />
                    <div className="logo-text">PostgreSQL</div>
                </div>
                <div className="logo-wrapper">
                    <img src={SqlLogo} alt='Miscrosoft SQL Logo' className='logo-item' />
                    <div className="logo-text">MS SQL Server</div>
                </div>
                <div className="logo-wrapper">
                    <img src={MaterializeLogo} alt='Materialize CSS Logo' className='logo-item' />
                    <div className="logo-text">Materialize CSS</div>
                </div>
                <div className="logo-wrapper">
                    <img src={DjangoLogo} alt='Django Logo' className='logo-item' />
                    <div className="logo-text">Django</div>
                </div>
                <div className="logo-wrapper">
                    <img src={PythonLogo} alt='Python Logo' className='logo-item' />
                    <div className="logo-text">Python</div>
                </div>
                <div className="logo-wrapper">
                    <img src={AwsLogo} alt='Amazon AWS Logo' className='logo-item' />
                    <div className="logo-text">Amazon AWS</div>
                </div>
            </div>
        </div>
    )
}