# Azzeddine Modal

This is a reusable and customizable React modal component created as part of an **OpenClassrooms project**. It includes two versions:

- `SimpleModal`: a lightweight, minimal modal.
- `ComplexModal`: a more flexible modal with options like close button positioning (`inside` or `outside`).

## 🚀 Installation

### Option 1: From GitHub

```
npm install git+https://github.com/YOUR_USERNAME/azzeddine-modal.git
```

### Option 2: From NPM

```
npm install azzeddine-modal
```

## 📦 Usage

### Simple Modal
```
<SimpleModal isOpen={isOpen} onClose={handleClose}>
    <p>Hello from SimpleModal!</p>
</SimpleModal>
```

### Complex Modal
```
<ComplexModal isOpen={isOpen} onClose={handleClose} closeButtonPosition="outside">
    <p>Hello from ComplexModal!</p>
</ComplexModal>
```