"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_redux_1 = require("react-redux");
var Cart_1 = require("components/uncommon/Cart");
var action_1 = require("store/ShoppingCart/action");
function ShoppingCartModal(props) {
    var dispatch = react_redux_1.useDispatch();
    var addedProducts = react_redux_1.useSelector(function (state) { return state.shoppingCartReducers.addedProducts; });
    var getTotal = function () {
        var result = addedProducts.reduce(function (total, item) {
            return total +
                Number(item.price.substring(1, item.price.length - 1)) * item.quantity;
        }, 0);
        return result;
    };
    var handleRemoveItem = function (id) {
        dispatch(action_1.removeItem(id));
    };
    var handleAddOrSubItem = function (id, quantity) {
        dispatch(action_1.addOrSubItem(id, quantity));
    };
    return (react_1["default"].createElement("div", { style: { float: "right" } },
        react_1["default"].createElement(antd_1.Dropdown, { overlay: react_1["default"].createElement(Cart_1.Cart, { addedProducts: addedProducts, removeItem: handleRemoveItem, addOrSubItem: handleAddOrSubItem, getTotal: getTotal }), arrow: true },
            react_1["default"].createElement(antd_1.Badge, { size: "default", count: addedProducts.length },
                react_1["default"].createElement(antd_1.Button, null,
                    react_1["default"].createElement(icons_1.ShoppingCartOutlined, null))))));
}
exports["default"] = ShoppingCartModal;
