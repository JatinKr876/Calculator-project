# 🧮 Calculator with Secret Access System

A modern, fully functional calculator built with HTML, CSS, and JavaScript featuring a hidden file access system protected by a secret code.

## ✨ Features

### Calculator Functions
- ✅ **Basic Operations**: Addition, Subtraction, Multiplication, Division
- ✅ **Decimal Support**: Work with decimal numbers
- ✅ **Clear & Delete**: Clear all or delete last character
- ✅ **Error Handling**: Prevents division by zero and invalid operations
- ✅ **Keyboard Support**: Full keyboard control

### Secret Access System
- 🔐 **Hidden Storage**: Protected hidden file accessed by secret code
- 🔑 **Secret Code Authentication**: Enter `12345` to unlock
- 📄 **Hidden File Display**: View confidential data upon correct authentication
- 🔒 **Secure Access**: Real-time feedback on access attempts

### User Experience
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts**: Full keyboard control
- 🔔 **Notifications**: Toast messages for user feedback
- ✨ **Smooth Animations**: Slide-in, pop-in, and hover effects

## 🎮 How to Use

### Calculator
1. Click on numbers to enter them into the display
2. Click operators (+, -, *, /) to perform calculations
3. Press **=** to see the result
4. Use **C** to clear everything
5. Use **←** to delete the last digit

### Secret Access
1. Scroll down to the "🔐 Enter Secret Code" section
2. Type the secret code: **`12345`**
3. Click **Unlock** or press **Enter**
4. If correct, the hidden file will appear with confidential data
5. Click the **✕** button to close the hidden file

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `+`, `-`, `*`, `/` | Operators |
| `.` | Decimal point |
| `Enter` | Calculate result |
| `Escape` | Clear display |
| `Backspace` | Delete last character |

## 📁 File Structure

```
Calculator-project/
├── index.html      # Main HTML file with calculator interface
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Documentation (this file)
```

## 🔐 Secret Code

**Default Secret Code:** `12345`

When you enter the correct code, you'll gain access to a hidden file containing confidential information.

## 🎨 Design Features

- **Color Scheme**: Purple gradient background with intuitive button colors
  - Blue: Number buttons
  - Purple/Pink: Operator buttons
  - Red: Clear button
  - Orange: Delete button
  - Cyan: Decimal button
  - Green: Equals button

- **Animations**:
  - Slide-in animation for calculator on load
  - Pop-in animation for hidden file
  - Smooth hover and active states
  - Toast notifications with slide animation

## 📱 Responsive Breakpoints

- **Desktop**: Full 500px width with all features
- **Tablet**: Adjusted padding and font sizes
- **Mobile**: Optimized for small screens
- **Small Mobile**: Extra compact layout for devices < 320px

## 🔒 Security Notes

This is a **demonstration project**. In a real application:
- Never use hardcoded secret codes
- Use server-side authentication
- Implement proper encryption
- Use HTTPS for sensitive data
- Implement rate limiting for incorrect attempts

## 🚀 Future Enhancements

- [ ] Advanced calculation features (square root, percentage, etc.)
- [ ] Calculation history
- [ ] Dark mode toggle
- [ ] Export calculation results
- [ ] Multiple hidden files with different access levels
- [ ] User session management
- [ ] Biometric authentication simulation

## 💡 Tips

- The calculator prevents multiple operators in a row
- Division by zero is caught and shows an error notification
- Floating point calculations are rounded to avoid precision errors
- The secret code input uses password field for security
- All notifications auto-dismiss after 3 seconds

## 📝 License

Free to use and modify for educational purposes.

---

**Made with ❤️ by JatinKr876**
