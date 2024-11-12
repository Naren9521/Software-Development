const Sidebar = () => {
    return (
        <div class="sidebar">
            <div>
                <h1>GramAi</h1>
                <a href="/dashboard" class="nav-item active"><i class="fas fa-home"></i> Home</a>
                <a href="#" class="nav-item"><i class="fas fa-file-alt"></i> Material</a>
                <a href="#" class="nav-item"><i class="fas fa-gamepad"></i> Games</a>
                <a href="#" class="nav-item"><i class="fas fa-tools"></i> Tools</a>
                <a href="#" class="nav-item"><i class="fas fa-chart-line"></i> Progress</a>
                <a href="#" class="nav-item"><i class="fas fa-envelope"></i> Messages</a>
            </div>
            <a href="#" class="logout">Logout</a>
        </div>
    );
};

export default Sidebar;
