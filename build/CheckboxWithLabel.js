import * as tslib_1 from "tslib";
import * as React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { fieldToCheckbox } from './Checkbox';
export var CheckboxWithLabel = function (_a) {
    var Label = _a.Label, props = tslib_1.__rest(_a, ["Label"]);
    return (React.createElement(FormControlLabel, tslib_1.__assign({ control: React.createElement(MuiCheckbox, tslib_1.__assign({}, fieldToCheckbox(props))) }, Label)));
};
CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';
//# sourceMappingURL=CheckboxWithLabel.js.map