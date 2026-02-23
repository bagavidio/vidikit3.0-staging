# @vidikit/ui-ios

iOS (SwiftUI) reference implementations for the VIDI Design System.

## Usage

This package contains reference token files and component stubs. To use in an iOS project:

1. Copy `Sources/VidiKit/Tokens/Colors.swift` into your Xcode project
2. Use `Sources/VidiKit/Components/Button.swift` as a reference for SwiftUI components

## Token Sync

Tokens are generated from the TypeScript source in `@vidikit/tokens`. To regenerate:

```sh
pnpm run tokens:sync
```

This updates `Sources/VidiKit/Tokens/Colors.swift` automatically.
