import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import './featuredInfo.scss'

export const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">ETB 2,432</span>
                    <span className="featuredMoneyRate"> ETB  -11.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">ETB 3,432</span>
                    <span className="featuredMoneyRate"> ETB  -11.4 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">ETB 2,432</span>
                    <span className="featuredMoneyRate"> ETB  +1.4 <ArrowUpward className='featuredIcon postive' /></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    )
}
