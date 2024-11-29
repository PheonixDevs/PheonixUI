# Phoenix UI Components
Phoenix UI Components is a React + TypeScript component library designed to simplify building consistent and beautiful user interfaces.
---
## Features
- **Reusable Components:** Pre-built components like `Button`, `Card`, `Alert`, and more.
- **TypeScript Support:** Fully typed for enhanced developer experience.
- **Customizable:** Modify styles and behavior through props.
- **Lightweight & Modular:** Import only what you need.
---
## Installation
Install using npm or yarn:

npm install phoenixui
# or
yarn add phoenixui

## Commands to remove react & react-dom from node modules:

rd /s /q node_modules\react

rd /s /q node_modules\react-dom

---
## v1.0.0 - List of Components 

- **PheonixButton**
- **PheonixSnackbar**
- **PheonixTextfield**
- **PheonixBox**
- **PheonixPaper**
- **PheonixAutocomplete**
- **PheonixSkeleton**
- **PheonixDialog**
- **PheonixTextarea**
- **PheonixFooter**
- **PheonixBreadcrumbs**
- **PheonixSwitch**
- **PheonixRadioButton**
- **PheonixCheckbox**
- **PheonixAccordion**
- **PheonixHeader**
- **PheonixLayout**
- **PheonixCard**
- **PheonixLogin**
- **PheonixSideBar**
- **PheonixDataGrid**
- **PheonixTab**

### Component Overview

## PheonixButton

A customizable button component that inherits Material-UI's Button features with added theming and styling.

### Props

| **Name**    | **Type**                                        | **Default**   | **Description**                                       |
|-------------|-------------------------------------------------|---------------|-------------------------------------------------------|
| `label`     | `string`                                        | `undefined`   | Text displayed on the button.                         |
| `onClick`   | `(event: React.MouseEvent<HTMLElement>) => void` | `undefined`   | Function triggered on button click.                   |
| `sx`        | `SxProps<Theme>`                                 | `undefined`   | Custom styles using Material-UI's system.             |
| `...props`  | `ButtonProps`                                    | `undefined`   | Inherits additional Material-UI Button properties.    |

## PheonixSnackbar
A highly customizable snackbar component for displaying brief notifications or alerts. Includes support for custom severity, positioning, and actions.
### Props
| **Name**         | **Type**                                     | **Default**                        | **Description**                                               |
|------------------|----------------------------------------------|------------------------------------|---------------------------------------------------------------|
| `vertical`       | `"top" | "bottom"`                           | `undefined`                        | Defines the vertical position of the snackbar.                |
| `horizontal`     | `"left" | "center" | "right"`                | `undefined`                        | Defines the horizontal position of the snackbar.              |
| `open`           | `boolean`                                    | `false`                            | Controls whether the snackbar is visible.                     |
| `onClose`        | `() => void`                                 | `undefined`                        | Callback triggered when the snackbar closes.                   |
| `message`        | `string`                                     | `undefined`                        | The message displayed inside the snackbar.                     |
| `customAction`   | `React.ReactNode`                            | `undefined`                        | Custom actions (e.g., buttons) displayed in the snackbar.      |
| `severity`       | `"success" | "error"`                        | `undefined`                        | The severity level of the snackbar (e.g., "success", "error"). |
| `backgroundColor`| `string`                                     | `theme.colors.success` or `theme.colors.successLight` | Overrides the background color of the snackbar.               |
| `color`          | `string`                                     | `theme.colors.white` or `theme.colors.error` | Overrides the text/icon color of the snackbar.                |
| `width`          | `string`                                     | `"auto"`                           | Width of the snackbar.                                        |
| `height`         | `string`                                     | `"auto"`                           | Height of the snackbar.                                       |
| `sx`             | `SxProps<Theme>`                              | `undefined`                        | Additional custom styles for the snackbar using Material-UI's system. |

## PheonixTextField
A reusable and customizable text field component built on Material-UI's `TextField`. Supports various input types, sizes, and adornments.
### Props
| **Name**         | **Type**                                     | **Default**                        | **Description**                                               |
|------------------|----------------------------------------------|------------------------------------|---------------------------------------------------------------|
| `id`             | `string`                                     | `undefined`                        | Unique identifier for the text field.                         |
| `type`           | `string`                                     | `required`                         | The type of input (e.g., text, password, email).              |
| `value`          | `string`                                     | `undefined`                        | The current value of the input.                               |
| `name`           | `string`                                     | `undefined`                        | The name attribute for the input element.                     |
| `placeholder`    | `string`                                     | `undefined`                        | Placeholder text displayed inside the input field.            |
| `label`          | `string`                                     | `undefined`                        | Label displayed above the input field.                        |
| `size`           | `"small" | "medium"`                         | `"medium"`                         | The size of the input field.                                  |
| `variant`        | `"standard" | "outlined" | "filled"`           | `undefined`                        | The variant style of the input field.                         |
| `onChange`       | `(event: ChangeEvent<HTMLInputElement>) => void` | `undefined`                        | Callback triggered when the value changes.                     |
| `onFocus`        | `(event: FocusEvent<HTMLInputElement>) => void`  | `undefined`                        | Callback triggered when the input gains focus.                |
| `onBlur`         | `(event: FocusEvent<HTMLInputElement>) => void`  | `undefined`                        | Callback triggered when the input loses focus.                |
| `endAdornment`   | `ReactNode`                                  | `undefined`                        | Custom adornment element displayed at the end of the input field. |
| `style`          | `CSSProperties`                              | `undefined`                        | Inline styles for the input field.                            |
| `required`       | `boolean`                                    | `false`                            | Marks the input field as required.                            |
| `className`      | `string`                                     | `undefined`                        | Custom class for additional styling.                          |
| `error`          | `boolean`                                    | `false`                            | Displays the input field with error styling.                  |
| `helperText`     | `string`                                     | `undefined`                        | Additional text displayed below the input field for guidance or error info. |
| `disabled`       | `boolean`                                    | `false`                            | Disables the input field.                                     |
| `sx`             | `SxProps`                                    | `undefined`                        | Material-UI's system property for custom styling.              |
| `multiline`      | `boolean`                                    | `false`                            | Enables multiline input.                                      |
| `rows`           | `number`                                     | `undefined`                        | Number of rows for multiline input.                           |
| `onKeyPress`     | `(event: KeyboardEvent<HTMLInputElement>) => void` | `undefined`                        | Callback triggered when a key is pressed inside the input field. |

## PheonixBox
A flexible container component built on Material-UI's `Box`, providing easy alignment, styling, and layout control.
### Props
| **Name**        | **Type**            | **Default**        | **Description**                                                 |
|-----------------|---------------------|--------------------|-----------------------------------------------------------------|
| `children`      | `React.ReactNode`    | `undefined`        | The content to be displayed inside the box.                     |
| `component`     | `React.ElementType`  | `"div"`            | The root component type (e.g., "div", "section", etc.).         |
| `style`         | `React.CSSProperties`| `undefined`        | Inline styles for the box component.                            |
| `sx`            | `SxProps<Theme>`     | `undefined`        | Material-UI's system properties for custom styling and theming. |

## PheonixPaper
A versatile wrapper component based on Material-UI's `Paper`, allowing for customized elevation, layout, and styling. Ideal for creating visually distinct sections or containers.
### Props
| **Name**        | **Type**              | **Default**        | **Description**                                                  |
|-----------------|-----------------------|--------------------|------------------------------------------------------------------|
| `children`      | `ReactNode`           | `undefined`        | Content to be displayed inside the PheonixPaper.                 |
| `elevation`     | `number`              | `1`                | The shadow depth, between 0 and 24.                              |
| `padding`       | `number | string`     | `undefined`        | Padding inside the paper.                                        |
| `height`        | `number | string`     | `undefined`        | Height of the paper container.                                   |
| `width`         | `number | string`     | `undefined`        | Width of the paper container.                                    |
| `marginLeft`    | `number | string`     | `undefined`        | Left margin for the container.                                   |
| `marginRight`   | `number | string`     | `undefined`        | Right margin for the container.                                  |
| `marginTop`     | `number | string`     | `undefined`        | Top margin for the container.                                    |
| `marginBottom`  | `number | string`     | `undefined`        | Bottom margin for the container.                                 |
| `borderRadius`  | `number | string`     | `undefined`        | Border radius for the container.                                 |
| `display`       | `CSSProperties['display']` | `'flex'        | CSS display property.                                           |
| `alignItems`    | `CSSProperties['alignItems']` | `'center'    | Alignment of child elements along the cross axis.               |
| `justifyContent`| `CSSProperties['justifyContent']` | `'center'  | Alignment of child elements along the main axis.                |
| `flexDirection` | `CSSProperties['flexDirection']` | `'row'      | Direction of the flex layout.                                   |
| `gap`           | `number | string`     | `undefined`        | Gap between child elements.                                      |
| `color`         | `string`              | `undefined`        | Text color inside the paper.                                     |
| `backgroundColor`| `string`             | `undefined`        | Background color of the paper.                                   |
| `style`         | `CSSProperties`       | `undefined`        | Inline styles for additional customization. 
|
                     
## PhoenixAutocomplete
A reusable and customizable wrapper around Material-UI's `Autocomplete` component. Provides additional features such as styled input fields, enhanced configurability, and support for various input types.
### Generic Types
| **Name**        | **Description**                                      |
|-----------------|------------------------------------------------------|
| `T`             | The type of the options available in the autocomplete.|
| `Multiple`      | Set to `true` if multiple selection is enabled.      |
| `DisableClearable` | Set to `true` to disable the clear button functionality. |
| `FreeSolo`      | Set to `true` if the autocomplete should allow free text. |

### Props
| **Name**          | **Type**                                             | **Default**            | **Description**                                                  |
|-------------------|------------------------------------------------------|------------------------|------------------------------------------------------------------|
| `id`              | `string`                                             | `undefined`            | The unique identifier for the autocomplete.                      |
| `options`         | `T[]`                                                | `undefined`            | List of options to display in the dropdown.                      |
| `value`           | `T`                                                  | `undefined`            | The current value of the autocomplete.                           |
| `placeholder`     | `string`                                             | `undefined`            | Placeholder text for the input field.                            |
| `label`           | `string`                                             | `undefined`            | Label for the autocomplete input.                                |
| `variant`         | `"standard" | "outlined" | "filled"`                | `"outlined"`            | Input field variant.                                             |
| `disabled`        | `boolean`                                            | `undefined`            | Disables the autocomplete if set to true.                        |
| `onChange`        | `(event: any, value: T | T[] | null) => void`        | `undefined`            | Callback fired when the value changes.                           |
| `onInputChange`   | `(event: any, value: string) => void`                | `undefined`            | Callback fired when the input value changes.                     |
| `name`            | `string`                                             | `undefined`            | Name attribute for the input field.                              |
| `endAdornment`    | `ReactNode`                                          | `undefined`            | Custom adornment to display at the end of the input field.       |
| `style`           | `CSSProperties`                                      | `undefined`            | Inline styles for the autocomplete component.                    |
| `className`       | `string`                                             | `undefined`            | Custom class name for styling the input field.                   |
| `loading`         | `boolean`                                            | `undefined`            | Displays a loading spinner if set to true.                       |
| `getOptionLabel`  | `(option: T) => string`                              | `undefined`            | Function to determine the label of an option.                    |
| `renderOption`    | `(props: any, option: T) => ReactNode`               | `undefined`            | Custom render function for the dropdown options.                 |
| `renderInput`     | `(params: AutocompleteRenderInputParams) => ReactNode`| `undefined`            | Custom render function for the input field.                      |
| `size`            | `"small" | "medium"`                                 | `"medium"`             | Input field size.                                               |
| `sx`              | `SxProps`                                            | `undefined`            | MUI style system prop for customizing styles.                    |
| `multiple`        | `boolean`                                            | `undefined`            | Enables multiple selection mode if set to true.                  |
| `freeSolo`        | `boolean`                                            | `undefined`            | Allows free-text input if set to true.                           |
| `disableClearable`| `boolean`                                            | `undefined`            | Disables the clear button functionality if set to true.          |

## PheonixSkeleton
The `PheonixSkeleton` component is a customizable wrapper for Material-UI's `Skeleton`, designed for creating placeholder loading indicators that seamlessly integrate with your theme.
### Props
The `PheonixSkeleton` component extends Material-UI's `SkeletonProps` and adds additional customization through `sx` and a predefined theme.

| **Prop Name**     | **Type**                                    | **Default**             | **Description**                                                   |
|-------------------|---------------------------------------------|-------------------------|-------------------------------------------------------------------|
| `variant`         | `"text" | "rectangular" | "circular"`       | `"text"`                 | Specifies the shape of the skeleton.                              |
| `animation`       | `"pulse" | "wave" | false`                  | `"pulse"`                | The animation type for the skeleton. Set to `false` for no animation. |
| `width`           | `number | string`                           | `undefined`             | Width of the skeleton. Can be a number or a CSS string (e.g., `"100%"`). |
| `height`          | `number | string`                           | `undefined`             | Height of the skeleton. Can be a number or a CSS string.         |
| `sx`              | `SxProps<Theme>`                            | `undefined`             | Material-UI `sx` prop for custom styles. Merges with theme-based default styles. |
| `...props`        | `SkeletonProps`                             | `undefined`             | All other props supported by Material-UI's `Skeleton`.            |

## PheonixDialog
The `PheonixDialog` component is a customizable dialog/modal built with Material-UI's `Dialog` component, providing a clear structure for handling actions like confirmation prompts. It can be used for confirming user actions or displaying important messages.
### Props
| **Prop Name**     | **Type**      | **Default**   | **Description**                                              |
|-------------------|---------------|---------------|--------------------------------------------------------------|
| `open`            | `boolean`     | `false`       | Controls the visibility of the dialog.                       |
| `onClose`         | `() => void`  | -             | A callback function that is triggered when the dialog is closed (typically from the "Cancel" button). |
| `onConfirm`       | `() => void`  | -             | A callback function that is triggered when the "Yes" button is clicked. |
| `entity`          | `string`      | `undefined`   | The entity involved in the confirmation message (e.g., a person's name, product name, etc.). |
| `entityname`      | `string`      | `undefined`   | The name of the entity involved (e.g., "John Doe", "Invoice", etc.). |
| `textTitle`       | `string`      | `undefined`   | The title text for the dialog.                               |
| `subText`         | `string`      | `undefined`   | Additional text that provides context to the dialog.         |
| `text`            | `string`      | `undefined`   | Text that describes the action to be confirmed (e.g., "Delete this item"). |
| `width`           | `string`      | `"auto"`      | The width of the dialog. Can be customized (e.g., `"500px"`). |
| `height`          | `string`      | `"auto"`      | The height of the dialog. Can be customized (e.g., `"300px"`). |

## PhoenixTextarea
The `PhoenixTextarea` component is a wrapper around Material-UI's `TextField` with the `multiline` prop, providing a customizable and flexible textarea input. This component is useful for collecting longer text inputs with options for validation, error handling, and other features.
### Props
| **Prop Name**     | **Type**                          | **Default**   | **Description**                                              |
|-------------------|-----------------------------------|---------------|--------------------------------------------------------------|
| `id`              | `string`                          | `undefined`   | The id of the textarea element. Used for accessibility or reference. |
| `value`           | `string`                          | `undefined`   | The current value of the textarea.                            |
| `name`            | `string`                          | `undefined`   | The name of the textarea, used when submitting the form data. |
| `placeholder`     | `string`                          | `undefined`   | Placeholder text when the textarea is empty.                  |
| `label`           | `string`                          | `undefined`   | Label displayed above the textarea for describing its purpose. |
| `variant`         | `"standard" \| "outlined" \| "filled"` | -             | Defines the appearance style of the textarea.                 |
| `onChange`        | `(event: ChangeEvent<HTMLTextAreaElement>) => void` | `undefined`   | Callback function triggered on input change.                  |
| `onFocus`         | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `undefined`   | Callback function triggered when the textarea is focused.     |
| `onBlur`          | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `undefined`   | Callback function triggered when the textarea loses focus.    |
| `required`        | `boolean`                         | `false`       | Specifies if the field is required for form submission.       |
| `error`           | `boolean`                         | `false`       | If true, the input will display an error state.               |
| `helperText`      | `string`                          | `undefined`   | Helper text displayed below the textarea when there's an error or additional information. |
| `disabled`        | `boolean`                         | `false`       | If true, the textarea is disabled, preventing user interaction. |
| `rows`            | `number`                          | `4`           | The number of visible rows in the textarea.                   |
| `className`       | `string`                          | `undefined`   | The class name that will be applied to the component for custom styling. |

## PhoenixFooter
The `PhoenixFooter` component is a customizable footer for a website, typically used to display copyright information, company links, and privacy policies. It dynamically updates the year to always show the current year, and offers various styling options for customization.
### Props
| **Prop Name**     | **Type**                          | **Default**                          | **Description**                                               |
|-------------------|-----------------------------------|--------------------------------------|---------------------------------------------------------------|
| `footerText`      | `string`                          | `"All Rights Reserved by "`          | Text displayed before the company name in the footer.          |
| `companyName`     | `string`                          | `"Pheonix Solutions"`                | The name of the company, which is a link to the company's website. |
| `companyLink`     | `string`                          | `"https://www.pheonixsolutions.com"`  | The URL the company name links to.                             |
| `policyText`      | `string`                          | `"Terms and Conditions\nPrivacy Policy"` | Text displayed for the terms and privacy policy links.         |
| `policyLink`      | `string`                          | `"https://www.pheonixsolutions.com/privacy-policy"` | The URL the privacy policy link points to.                     |
| `style`           | `React.CSSProperties`             | `undefined`                          | Custom styles for the footer container.                        |
| `textStyle`       | `React.CSSProperties`             | `undefined`                          | Custom styles for the text inside the footer.                  |
| `linkStyle`       | `React.CSSProperties`             | `undefined`                          | Custom styles for the links in the footer (company name and policy links). |

## PhoenixBreadcrumbs

The `PhoenixBreadcrumbs` component is a breadcrumb navigation component that displays a series of links representing the hierarchy of pages or sections. This component is designed using Material-UI (`@mui/material`) components such as `Breadcrumbs`, `Link`, and `Typography`, and provides flexible styling through props for customizing text and link styles.

### Props

| **Prop Name**     | **Type**            | **Default** | **Description**                                           |
|-------------------|---------------------|-------------|-----------------------------------------------------------|
| `breadcrumbs`     | `BreadcrumbItem[]`   | Required    | An array of breadcrumb items, each containing a text (breadcrumb label) and an optional `to` (URL link). |
| `textStyle`       | `object`            | `{}`        | Custom styles for the `Typography` component (last breadcrumb item). |
| `linkStyle`       | `object`            | `{}`        | Custom styles for the `Link` component (breadcrumb links). |

# PheonixSwitch

The `PheonixSwitch` component is a custom wrapper around the Material-UI Switch component that allows for more flexible styling, such as applying a custom primary color when the switch is checked.

## Props

| **Prop Name** | **Type**                                     | **Default** | **Description**                                                                                                                                           |
|---------------|----------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onChange`    | `(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void` | Optional    | Callback function that is triggered when the switch state changes.                                                                                        |
| `sx`          | `SxProps<Theme>`                             | Optional    | Custom styling for the Switch component, allowing overrides or additions to the default styles using the MUI sx prop.                                       |
| `...props`    | `SwitchProps`                                 | Inherited   | All other standard props of the MUI Switch component (e.g., checked, disabled, etc.) are passed down automatically.                                         |

## PheonixRadioButton

The `PheonixRadioButton` component is a custom wrapper around Material-UI's Radio button, allowing for easy styling customizations, particularly for handling the checked state color and other optional styles.

## Props

| **Prop Name** | **Type**                                     | **Default** | **Description**                                                                                                                                           |
|---------------|----------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onChange`    | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Optional    | Callback function triggered when the radio button state changes (e.g., when it is selected).                                                             |
| `sx`          | `SxProps<Theme>`                             | Optional    | Custom styling for the Radio component, allowing overrides or additions to the default styles using the MUI sx prop.                                       |
| `...props`    | `RadioProps`                                 | Inherited   | All other standard props of the MUI Radio component (e.g., checked, disabled, value, etc.) are passed down automatically.                                  |


# PheonixCheckbox

The `PheonixCheckbox` component is a custom wrapper around Material-UI's Checkbox, allowing you to easily customize its behavior and appearance, particularly for the checked state and other styling properties.

## Props

| **Prop Name** | **Type**                                     | **Default** | **Description**                                                                                                                                           |
|---------------|----------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onChange`    | `(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void` | Optional    | Callback function triggered when the checkbox state changes (e.g., when it is checked or unchecked).                                                     |
| `sx`          | `SxProps<Theme>`                             | Optional    | Custom styling for the Checkbox component, allowing overrides or additions to the default styles using the MUI sx prop.                                    |
| `...props`    | `CheckboxProps`                              | Inherited   | All other standard props of the MUI Checkbox component (e.g., checked, disabled, value, etc.) are passed down automatically.                              |


# PheonixAccordion

The `PheonixAccordion` component is a custom implementation of Material-UI's Accordion component that allows you to display a list of collapsible sections. Each section is expandable or collapsible individually.

## Props

| **Prop Name** | **Type**            | **Description**                                                                 |
|---------------|---------------------|---------------------------------------------------------------------------------|
| `items`       | `AccordionItem[]`    | An array of items to be displayed inside the accordion. Each item includes: `id` (unique identifier), `title` (the title of the accordion), and `content` (the content displayed when the accordion is expanded). |

# PheonixLayout

The `PheonixLayout` component is a flexible and responsive layout structure that integrates a header, optional sidebar, main content area, and footer. It provides a seamless and adaptive layout for pages that may or may not include a sidebar. It supports a custom logo, title, logout icon, and sidebar toggle functionality.

## Props

| **Prop Name**        | **Type**                                                          | **Description**                                                                                     |
|-----------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `title`              | `ReactNode`                                                      | The title to be displayed in the header.                                                           |
| `children`           | `ReactNode`                                                      | The main content to be rendered within the layout.                                                 |
| `hasSidebar`         | `boolean`                                                        | Determines if the layout will have a sidebar. Defaults to `false`.                                 |
| `SidebarComponent`   | `React.FC<{ isOpen: boolean; onToggle: () => void }>`            | A component to render the sidebar, with `isOpen` and `onToggle` props for managing its state.       |
| `isSidebarOpen`      | `boolean`                                                        | Determines if the sidebar is open. Defaults to `false`.                                            |
| `onToggleSidebar`    | `() => void`                                                     | A function to toggle the sidebar's open/closed state. Required if `hasSidebar` is `true`.           |
| `logo`               | `string`                                                         | The URL of the logo image to be displayed in the header.                                           |
| `logoutIcon`         | `string`                                                         | The URL of the logout icon image to be displayed in the header.                                    |

# PheonixCard

The `PheonixCard` component is a customizable card-style UI element that can display an image, title, description, and buttons for user interaction. It supports different button types, including primary, secondary, and tertiary buttons, and allows for configuration of button states, such as disabled or enabled. 

## Props

| **Prop Name**              | **Type**                               | **Description**                                                                                      |
|-----------------------------|----------------------------------------|------------------------------------------------------------------------------------------------------|
| `title`                    | `string`                              | The title displayed at the top of the card.                                                         |
| `description`              | `string`                              | A brief description or text content to be displayed under the title.                                |
| `imageSrc`                 | `string`                              | The URL of the image to be displayed at the top of the card.                                         |
| `imageAlt`                 | `string`                              | Alternative text for the image.                                                                     |
| `primaryButtonText`        | `string`                              | Text to display on the primary button.                                                              |
| `secondaryButtonText`      | `string`                              | Text to display on the secondary button.                                                            |
| `isPrimaryButtonDisabled`  | `boolean`                             | Determines whether the primary button is disabled. Defaults to `false`.                             |
| `tertiaryButtonText`       | `string`                              | Text to display on the tertiary button.                                                             |
| `isTertiaryButtonDisabled` | `boolean`                             | Determines whether the tertiary button is disabled. Defaults to `false`.                            |
| `onPrimaryButtonClick`     | `() => void`                          | Function to be executed when the primary button is clicked.                                         |
| `onSecondaryButtonClick`   | `() => void`                          | Function to be executed when the secondary button is clicked.                                       |
| `children`                 | `React.ReactNode`                     | Optional children to be rendered inside the card.                                                   |
| `cardHeight`               | `string \| number`                    | Specifies the height of the card.                                                                   |
| `cardWidth`                | `string \| number`                    | Specifies the width of the card.                                                                    |
| `sx`                       | `SxProps`                             | Additional styles to be applied to the card using the MUI system.                                   |
| `styles`                   | `React.CSSProperties`                 | Inline CSS styles for the card (if any).                                                            |

# PheonixLogin

The `PheonixLogin` component provides a customizable login form with fields for email and password input. It supports toggling the visibility of the password field and provides an optional `loginButton` for submitting the form. The component also allows for customizing the email and password fields, including their attributes and behavior.

## Props

| **Prop Name**       | **Type**                                                                                  | **Description**                                                                                                                                              |
|----------------------|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `emailTextField`     | `Omit<React.ComponentProps<typeof PheonixTextField>, "type">`                             | Customizable props for the email input field, excluding the `type` prop (which is always set to `"email"`).                                                   |
| `passwordTextField`  | `Omit<React.ComponentProps<typeof PheonixTextField>, "type">`                             | Customizable props for the password input field, excluding the `type` prop (which toggles between `"text"` and `"password"` based on visibility).             |
| `loginButton`        | `React.ComponentProps<typeof PheonixButton>`                                              | Customizable props for the login button, allowing customization of the button's appearance and behavior.                                                     |
| `paperProps`         | `React.ComponentProps<typeof PheonixPaper>`                                               | Customizable props for the `PheonixPaper` component that wraps the form, such as elevation and styling.                                                      |

# PheonixSidebar

The `PheonixSideBar` component is a customizable sidebar item used in navigation. It allows you to display an icon with text, and also provides interactive functionality for handling selection events.

This component supports tooltips to display additional information when hovering over the icon and text, and it can be styled using various props for customization.

## Props

| Prop Name          | Type                                | Default  | Description                                                                                                                                             |
|--------------------|-------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `icon`             | `React.ReactNode`                   | -        | The icon to be displayed in the sidebar item.                                                                                                           |
| `text`             | `string`                            | -        | The text label for the sidebar item.                                                                                                                     |
| `to`               | `string`                            | -        | The URL or identifier to navigate to when the sidebar item is selected.                                                                                 |
| `selected`         | `boolean`                           | `false`  | Determines if the sidebar item is selected. If true, applies the selected styling.                                                                     |
| `onSelect`         | `(to: string) => void`              | -        | A callback function triggered when the sidebar item is clicked. It receives the `to` prop as a parameter.                                               |
| `boxSx`            | `SxProps<Theme>`                    | -        | Custom styles for the outer `Box` container.                                                                                                           |
| `listItemSx`       | `SxProps<Theme>`                    | -        | Custom styles for the `ListItem` element.                                                                                                              |
| `listIconSx`       | `SxProps<Theme>`                    | -        | Custom styles for the `ListItemIcon` element.                                                                                                          |
| `listTextSx`       | `SxProps<Theme>`                    | -        | Custom styles for the `ListItemText` element.                                                                                                          |

# PhoenixDataGrid

The `PhoenixDataGrid` component is a custom wrapper around the Material-UI DataGrid, designed to offer advanced features such as custom pagination, search, and dynamic toolbar actions. It provides a highly customizable table with various display and styling options.

## Props

| **Prop Name**                  | **Type**                                      | **Default**   | **Description**                                                                                                                                                                  |
|---------------------------------|-----------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `columns`                       | `GridColDef[]`                                | Required      | The column definitions for the DataGrid.                                                                                                                                          |
| `rows`                          | `any[]`                                       | Required      | The data rows to be displayed in the table.                                                                                                                                       |
| `height`                        | `number`                                      | `70vh`        | The height of the table (can be customized based on screen size).                                                                                                                |
| `width`                         | `string`                                      | `100%`        | The width of the table.                                                                                                                                                           |
| `sx`                            | `Record<string, any>`                         | Optional      | Custom styles for the table container, allowing further customization using the MUI sx prop.                                                                                      |
| `components`                    | `object`                                      | Optional      | An object allowing to customize the toolbar component or other inner components. Example: `{ Toolbar: CustomToolbar }`.                                                          |
| `paginationModel`               | `{ pageSize: number, page: number }`          | Optional      | The pagination model for the table (page size and page number).                                                                                                                 |
| `onPaginationModelChange`       | `(newPaginationModel: { pageSize: number, page: number }) => void` | Optional | Callback triggered when the pagination model changes.                                                                                                                            |
| `onSearchQueryChange`           | `(newQuery: string) => void`                  | Optional      | Callback triggered when the search query is updated.                                                                                                                             |
| `searchQuery`                   | `string`                                      | Required      | The search query used to filter rows in the table.                                                                                                                                |
| `paginationMode`                | `any`                                         | Optional      | Defines the pagination mode for the table (e.g., "server").                                                                                                                     |
| `rowCount`                      | `number`                                      | Optional      | The total number of rows for pagination.                                                                                                                                          |
| `pageSizeOptions`               | `number[]`                                    | Optional      | An array of available page size options for the pagination.                                                                                                                     |
| `loader`                        | `React.ReactNode`                             | Optional      | A custom loader to be shown while the table is loading.                                                                                                                           |
| `loading`                       | `boolean`                                     | Optional      | Flag indicating whether the table is loading. If true, a loading overlay is displayed.                                                                                           |
| `style`                         | `CSSProperties`                               | Optional      | Additional inline styles for the table.                                                                                                                                           |
| `customProp`                    | `string`                                      | Optional      | Any custom property specific to your use case.                                                                                                                                    |

### Toolbar Component

The `PhoenixDataGrid` includes a customizable toolbar component (`CustomToolbar`) that allows users to add actions like search and export.

### Custom No Rows Overlay

The component includes a custom overlay when there are no rows to display, showing messages like "No match found" or "No rows", depending on whether a search query is present.

### Responsive Design

The `PhoenixDataGrid` is responsive and adapts to different screen sizes. It adjusts the height, table width, and toolbar layout based on the screen dimensions.

### Pagination

Pagination is customizable with the `paginationModel` prop and can be handled via server-side pagination with the `paginationMode` set to `"server"`. The page size options can be customized with the `pageSizeOptions` prop.

### Search Functionality

The search functionality is integrated with a `PhoenixSearch` component, which is included in the toolbar. It listens for changes in the search query and updates the table content accordingly.

---


# PhoenixTabs

The `PhoenixTabs` component is a custom wrapper around the Material-UI Tabs component, designed to offer enhanced customization for tabs, including custom styles, orientations, and event handling. It allows you to create a tab-based navigation system with the flexibility to customize the look and feel of each tab and its content.

## Props

| **Prop Name**                  | **Type**                                      | **Default**   | **Description**                                                                                                                                                                  |
|---------------------------------|-----------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `tabData`                       | `TabDataItem[]`                               | Required      | An array of tab data objects containing the label and content for each tab.                                                                                                     |
| `onChange`                      | `(event: React.SyntheticEvent, newValue: number) => void` | Optional | Callback triggered when the tab selection changes.                                                                                                                               |
| `tabsProps`                     | `object`                                      | Optional      | Custom props for the Tabs component, allowing additional customization (e.g., `sx` for custom styles).                                                                         |
| `tabProps`                      | `object`                                      | Optional      | Custom props for each Tab component, allowing customization like styles (`sx`).                                                                                                  |
| `variant`                       | `"standard" | "fullWidth" | "scrollable"`       | `"standard"`  | The variant of the tabs. Can be "standard", "fullWidth", or "scrollable".                                                                                                         |
| `orientation`                   | `"horizontal" | "vertical"`                   | `"horizontal"` | Defines the orientation of the tabs. Can be "horizontal" or "vertical".                                                                                                          |

### TabDataItem

Each item in the `tabData` array should follow this structure:

| **Prop Name**  | **Type**         | **Description**                                                                                                                                 |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `label`        | `string`         | The label to be displayed for the tab.                                                                                                          |
| `content`      | `React.ReactNode` | Optional. The content to be displayed when the tab is selected.                                                                                 |
| `sx`           | `SxProps<Theme>` | Optional. Custom styles for the tab.                                                                                                            |

---

## Sample Usage
## Example with `PheonixSnackbar` and `PheonixButton`

This example demonstrates how to use `PheonixSnackbar` and `PheonixButton` components in a React application. The `PheonixSnackbar` is used to display a success message, and the `PheonixButton` triggers an action when clicked.

```jsx
import React, { useState } from "react";
import { PheonixSnackbar, PheonixButton } from "pheonixui";

const App = () => {
  const [open, setOpen] = useState(true);

  const handleSubmit = () => {
    console.log("Button clicked!");
    setOpen(true); 
  };

  return (
    <div>
      <PheonixSnackbar
        open={open}
        onClose={() => setOpen(false)}
        message="This is a success message!"
        severity="success"
        vertical="top"
        horizontal="center"
      />
      
      <PheonixButton 
        label="Submit" 
        onClick={handleSubmit} 
        variant="contained" 
        sx={{
          backgroundColor: '#FF5722',
          color: '#FFFFFF',
        }}
      />
    </div>
  );
};

export default App; 
```
---
## License 
All Rights Reserved By [Pheonix Solutions](https://www.pheonixsolutions.com)

---

## Support
For questions or issues, contact us at dev@pheonixsolutions.com

---

