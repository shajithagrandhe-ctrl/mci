Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("d:\mci\reference\contact.png")

# Let's inspect rows and columns to find the white card's boundary
# Check middle row y=500
$xLeft = 0
$xRight = 0
for ($x = 0; $x -lt $bmp.Width; $x++) {
    $c = $bmp.GetPixel($x, 500)
    if ($c.R -gt 250 -and $c.G -gt 250 -and $c.B -gt 250) {
        if ($xLeft -eq 0) { $xLeft = $x }
        $xRight = $x
    }
}
Write-Output "White card horizontal: $xLeft to $xRight"

# Check vertical in white card at x=500
$yTop = 0
$yBottom = 0
for ($y = 0; $y -lt $bmp.Height; $y++) {
    $c = $bmp.GetPixel(500, $y)
    if ($c.R -gt 250 -and $c.G -gt 250 -and $c.B -gt 250) {
        if ($yTop -eq 0) { $yTop = $y }
        $yBottom = $y
    }
}
Write-Output "White card vertical: $yTop to $yBottom"

# Now find non-white pixels inside this white card on left side (e.g. x from $xLeft+10 to $xLeft + 500)
$lMinX = 9999; $lMaxX = 0; $lMinY = 9999; $lMaxY = 0
for ($y = $yTop + 5; $y -lt $yBottom - 5; $y++) {
    for ($x = $xLeft + 5; $x -lt ($xLeft + 480); $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            if ($x -lt $lMinX) { $lMinX = $x }
            if ($x -gt $lMaxX) { $lMaxX = $x }
            if ($y -lt $lMinY) { $lMinY = $y }
            if ($y -gt $lMaxY) { $lMaxY = $y }
        }
    }
}
Write-Output "Logo exact bounds inside card: minX=$lMinX, maxX=$lMaxX, minY=$lMinY, maxY=$lMaxY, W=$($lMaxX-$lMinX+1), H=$($lMaxY-$lMinY+1)"
$bmp.Dispose()
