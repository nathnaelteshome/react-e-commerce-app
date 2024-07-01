import './widgetLg.scss'

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/id/539964524/photo/education-teenage-girls-studying-science-engineering-at-home-homework.jpg?s=612x612&w=0&k=20&c=CnTQ2k5_Qquqlg6SWxHfqhgA3V6VwmsHQoyjJjnVXus=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">ETB 122.00</td>
                    <td className="widgetLgStatus"><Button type='Approved' /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/id/539964524/photo/education-teenage-girls-studying-science-engineering-at-home-homework.jpg?s=612x612&w=0&k=20&c=CnTQ2k5_Qquqlg6SWxHfqhgA3V6VwmsHQoyjJjnVXus=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">ETB 122.00</td>
                    <td className="widgetLgStatus"><Button type='Declined' /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/id/539964524/photo/education-teenage-girls-studying-science-engineering-at-home-homework.jpg?s=612x612&w=0&k=20&c=CnTQ2k5_Qquqlg6SWxHfqhgA3V6VwmsHQoyjJjnVXus=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">ETB 122.00</td>
                    <td className="widgetLgStatus"><Button type='Pending' /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/id/539964524/photo/education-teenage-girls-studying-science-engineering-at-home-homework.jpg?s=612x612&w=0&k=20&c=CnTQ2k5_Qquqlg6SWxHfqhgA3V6VwmsHQoyjJjnVXus=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">ETB 122.00</td>
                    <td className="widgetLgStatus"><Button type='Approved' /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg