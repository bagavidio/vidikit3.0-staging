/**
 * VIDI Design System — iOS Button (SwiftUI)
 * Reference implementation. Token values from Colors.swift.
 *
 * Usage:
 *   VidiButton("Save", intent: .primary) { ... }
 *   VidiButton("Watch Now", intent: .extended, size: .lg) { ... }
 */

import SwiftUI

// MARK: — Types

public enum VidiButtonIntent {
    case primary
    case extended
    case neutral
    case ghost
    case outline
    case destructive
}

public enum VidiButtonSize {
    case xs
    case sm
    case `default`
    case lg
}

// MARK: — Component

public struct VidiButton: View {
    let label: String
    let intent: VidiButtonIntent
    let size: VidiButtonSize
    let isLoading: Bool
    let isDisabled: Bool
    let action: () -> Void

    public init(
        _ label: String,
        intent: VidiButtonIntent = .primary,
        size: VidiButtonSize = .default,
        isLoading: Bool = false,
        isDisabled: Bool = false,
        action: @escaping () -> Void
    ) {
        self.label = label
        self.intent = intent
        self.size = size
        self.isLoading = isLoading
        self.isDisabled = isDisabled
        self.action = action
    }

    public var body: some View {
        Button(action: action) {
            HStack(spacing: 6) {
                if isLoading {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: foregroundColor))
                        .scaleEffect(0.7)
                }
                Text(label)
                    .font(.system(size: fontSize, weight: .medium))
            }
            .padding(.horizontal, horizontalPadding)
            .frame(height: height)
        }
        .background(backgroundColor)
        .foregroundColor(foregroundColor)
        .cornerRadius(height / 2)
        .disabled(isDisabled || isLoading)
        .opacity(isDisabled ? 0.5 : 1.0)
    }

    // MARK: — Computed

    private var height: CGFloat {
        switch size {
        case .xs:      return 24
        case .sm:      return 32
        case .default: return 36
        case .lg:      return 40
        }
    }

    private var fontSize: CGFloat {
        size == .xs ? 12 : 14
    }

    private var horizontalPadding: CGFloat {
        switch size {
        case .xs: return 10
        case .sm: return 12
        case .default: return 12
        case .lg: return 16
        }
    }

    private var backgroundColor: Color {
        switch intent {
        case .primary:     return .vidiRed30
        case .extended:    return .vidiBlue30
        case .neutral:     return .vidiGray70
        case .ghost:       return Color.white.opacity(0.05)
        case .outline:     return Color.clear
        case .destructive: return Color.vidiRed50.opacity(0.1)
        }
    }

    private var foregroundColor: Color {
        switch intent {
        case .primary, .extended, .neutral: return .white
        case .ghost, .outline:              return Color.primary
        case .destructive:                  return .vidiRed50
        }
    }
}

// MARK: — Preview

#Preview {
    VStack(spacing: 12) {
        VidiButton("Primary",     intent: .primary)     { }
        VidiButton("Extended",    intent: .extended)    { }
        VidiButton("Neutral",     intent: .neutral)     { }
        VidiButton("Ghost",       intent: .ghost)       { }
        VidiButton("Destructive", intent: .destructive) { }
        VidiButton("Loading",     isLoading: true)      { }
        VidiButton("Disabled",    isDisabled: true)     { }
    }
    .padding()
}
