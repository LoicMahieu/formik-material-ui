import * as tslib_1 from "tslib";
import * as React from 'react';
import MuiSelect from '@material-ui/core/Select';
export var fieldToSelect = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["field", "form", "disabled"]);
    return tslib_1.__assign({ disabled: isSubmitting || disabled }, props, field);
};
export var Select = function (props) { return React.createElement(MuiSelect, tslib_1.__assign({}, fieldToSelect(props))); };
Select.displayName = 'FormikMaterialUISelect';
//# sourceMappingURL=Select.js.map