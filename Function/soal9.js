function formatDuration(seconds) {
    if (seconds < 0) return 'Waktu tidak valid';
    
    const units = [
        { value: 31536000, name: 'tahun' },
        { value: 86400, name: 'hari' },
        { value: 3600, name: 'jam' },
        { value: 60, name: 'menit' },
        { value: 1, name: 'detik' }
    ];
    
    let remaining = seconds;
    const parts = [];
    
    for (const unit of units) {
        const count = Math.floor(remaining / unit.value);
        if (count > 0) {
            parts.push(`${count} ${unit.name}`);
            remaining %= unit.value;
        }
    }
    
    return parts.length > 0 ? parts.join(', ') : '0 detik';
}


console.log(formatDuration(3662)); 