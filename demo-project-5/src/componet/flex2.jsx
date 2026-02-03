import { FaSimCard } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import card from '../assets/img/card.png'
import bill from '../assets/img/bill.png'


function Flex2(){
    return(
        <div className="second">
            <div className="h1"></div>
            <div className="h2">
                <div className="u1">
                    <div className="x1">
                        <div className="j1">
                            <FaSimCard />
                        </div>
                        <div className="j2"></div>
                        <div className="j3">
                            <FaWifi />

                        </div>
                    </div>
                    <div className="x2"></div>
                    <div className="x3">Janathan michoel</div>
                    <div className="x4">... 3456</div>
                    <div className="x5"></div>
                    <div className="x6">
                        <div className="x7">09/22</div>
                        <div className="x8">
                            <img src={card} />
                        </div>
                    </div>
                </div>
                <div className="u2"></div>
                <div className="u3">
                    <div className="m1">Company</div>
                    <div className="m2"></div>
                    <div className="m3">Apple</div>
                </div>
                <div className="u4">
                    <div className="v1">order number</div>
                    <div className="v2">1266201</div>
                </div>
                <div className="u5">
                    <div className="q1">Product</div>
                    <div className="q2">MACKbOOK Air</div>
                </div>
                <div className="u6">
                    <div className="w1">VAT(20%)</div>
                    <div className="w2">$100.00</div>
                </div>
                <div className="u7"></div>
                <div className="u8">you have ta pay</div>
                <div className="u9">
                    <div className="e1">549.99 USD</div>
                    <div className="e2">
                        <img src={bill} />
                    </div>
                </div>
            </div>
            
        </div>

    )
}
export default Flex2