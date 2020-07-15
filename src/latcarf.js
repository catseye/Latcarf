var TWO_PI = Math.PI * 2;


Latcarf = function() {
    this.init = function(cfg) {
        this.canvas = cfg.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.start();
    };

    this.start = function() {
        this.objects = [];

        // add many small objects
        for (var i = 0; i < 100; i++) {
            var nobj = {
                x: Math.floor(Math.random() * this.canvas.width),
                y: Math.floor(Math.random() * this.canvas.height),
                r: 2,
                connection: null
            };
            this.objects.push(nobj);
        }

        var $this = this;
        this.interval = setInterval(function() {
            $this.update();
            $this.draw();
        }, 25);
    };

    this.stop = function() {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    };

    this.reset = function() {
        this.stop();
        this.start();
    };

    this.draw = function() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.objects.length; i++) {
            var o = this.objects[i];

            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = "black";
            this.ctx.fillStyle = "black";
            this.ctx.arc(o.x, o.y, o.r * 2, 0, TWO_PI, false);
            this.ctx.fill();

            if (o.connection !== null) {
                this.ctx.beginPath();
                this.ctx.moveTo(o.x, o.y);
                this.ctx.lineTo(o.connection.x, o.connection.y);
                this.ctx.stroke();
            }
        }
    };

    this.update = function() {
        var selected = undefined;

        // pick an unconnected object
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].connection === null) {
                selected = this.objects[i];
                break;
            }
        }

        if (selected === undefined) {
            this.stop();
            return;
        }

        // pick the closest unconnected object of the same size
        var target = undefined;
        var distance = 1000000;
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i] === selected || this.objects[i].connection !== null) continue;
            var dx = this.objects[i].x - selected.x;
            // FUN BUG // var dy = this.objects[i].x - selected.x;
            var dy = this.objects[i].y - selected.y;
            var d = Math.sqrt(dx * dx + dy * dy);
            if (d < distance) {
                target = this.objects[i];
                distance = d;
            }
        }

        if (target === undefined) {
            this.stop();
            return;
        }

        // create a larger object at their midpoint
        var nobj = {
            x: (selected.x + target.x) / 2,
            y: (selected.y + target.y) / 2,
            r: (selected.r + 1),
            connection: null
        };
        this.objects.push(nobj);

        // connect the old to the new
        selected.connection = nobj;
        target.connection = nobj;
    };

};
