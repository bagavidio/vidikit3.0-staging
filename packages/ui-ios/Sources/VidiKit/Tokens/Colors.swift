/**
 * VIDI Design System — iOS Color Tokens (SwiftUI)
 * Generated: 2026-02-23T08:35:23.167Z
 * Source: packages/tokens/src/palette.ts
 */

import SwiftUI

public extension Color {
    // MARK: — Red
    static let vidiRed10 = Color(hex: "#F8C8D1")
    static let vidiRed20 = Color(hex: "#FE5070")
    static let vidiRed30 = Color(hex: "#FD1B44")  // brand core
    static let vidiRed40 = Color(hex: "#E3052D")
    static let vidiRed50 = Color(hex: "#CA0528")
    static let vidiRed60 = Color(hex: "#B00423")
    static let vidiRed70 = Color(hex: "#7D0017")

    // MARK: — Blue
    static let vidiBlue10 = Color(hex: "#CAE2FF")
    static let vidiBlue20 = Color(hex: "#348BF4")
    static let vidiBlue30 = Color(hex: "#0074FF")  // brand core
    static let vidiBlue40 = Color(hex: "#0067E2")
    static let vidiBlue50 = Color(hex: "#005DCC")
    static let vidiBlue60 = Color(hex: "#0153B6")
    static let vidiBlue70 = Color(hex: "#004496")

    // MARK: — Tosca
    static let vidiTosca10 = Color(hex: "#BDF2F5")
    static let vidiTosca20 = Color(hex: "#1CCEDA")
    static let vidiTosca30 = Color(hex: "#10C1CC")  // brand core
    static let vidiTosca40 = Color(hex: "#0D9AA3")
    static let vidiTosca50 = Color(hex: "#0C9199")
    static let vidiTosca60 = Color(hex: "#0A747A")
    static let vidiTosca70 = Color(hex: "#07575C")

    // MARK: — Green
    static let vidiGreen10 = Color(hex: "#C4FBDD")
    static let vidiGreen20 = Color(hex: "#25E57E")
    static let vidiGreen30 = Color(hex: "#22DA76")  // brand core
    static let vidiGreen40 = Color(hex: "#0ABA5B")
    static let vidiGreen50 = Color(hex: "#10AD58")
    static let vidiGreen60 = Color(hex: "#078E45")
    static let vidiGreen70 = Color(hex: "#09782E")

    // MARK: — Purple
    static let vidiPurple10 = Color(hex: "#D8BFF8")
    static let vidiPurple20 = Color(hex: "#7318E7")
    static let vidiPurple30 = Color(hex: "#6410CF")  // brand core
    static let vidiPurple40 = Color(hex: "#500DA6")
    static let vidiPurple50 = Color(hex: "#4B0C9B")
    static let vidiPurple60 = Color(hex: "#3C0A7C")
    static let vidiPurple70 = Color(hex: "#2D075D")

    // MARK: — Pink
    static let vidiPink10 = Color(hex: "#FFC6FA")
    static let vidiPink20 = Color(hex: "#E124CF")
    static let vidiPink30 = Color(hex: "#CC16BB")  // brand core
    static let vidiPink40 = Color(hex: "#A31296")
    static let vidiPink50 = Color(hex: "#99118C")
    static let vidiPink60 = Color(hex: "#7A0D70")
    static let vidiPink70 = Color(hex: "#5C0A54")

    // MARK: — Yellow
    static let vidiYellow10 = Color(hex: "#FFEACA")
    static let vidiYellow20 = Color(hex: "#FFB23E")
    static let vidiYellow30 = Color(hex: "#F9A01A")  // brand core
    static let vidiYellow40 = Color(hex: "#E09017")
    static let vidiYellow50 = Color(hex: "#C78015")
    static let vidiYellow60 = Color(hex: "#BB7814")
    static let vidiYellow70 = Color(hex: "#956010")

    // MARK: — Gray
    static let vidiGray10 = Color(hex: "#F5F8FF")
    static let vidiGray20 = Color(hex: "#C7CBD4")
    static let vidiGray30 = Color(hex: "#9498A1")  // brand core
    static let vidiGray40 = Color(hex: "#525861")
    static let vidiGray50 = Color(hex: "#26292E")
    static let vidiGray60 = Color(hex: "#18191C")
    static let vidiGray70 = Color(hex: "#0C0D0F")  // brand core

    // MARK: — Hex initialiser (private)
    private init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let r = Double((int >> 16) & 0xFF) / 255
        let g = Double((int >> 8)  & 0xFF) / 255
        let b = Double(int         & 0xFF) / 255
        self.init(.sRGB, red: r, green: g, blue: b, opacity: 1)
    }
}
