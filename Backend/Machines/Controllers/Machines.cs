using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Machines.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Machines.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MachinesController : ControllerBase
    {
        private readonly MachineContext _context;

        public MachinesController(MachineContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Machine>>> GetMachines([FromQuery] string? searchValue = null)
        {
            IQueryable<Machine> query = _context.Machines;

            if (!string.IsNullOrEmpty(searchValue))
            {
                query = query.Where(m => m.Description.Contains(searchValue));
            }

            var machines = await query.ToListAsync();
            return Ok(machines);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Machine>> GetMachine(int id)
        {
            var machine = await _context.Machines.FindAsync(id);

            if (machine == null)
            {
                return NotFound();
            }

            return Ok(machine);
        }

        [HttpGet("cosechadoras")]
        public async Task<ActionResult<IEnumerable<Machine>>> GetCosechadoras()
        {
            var cosechadoras = await _context.Machines
                .Where(m => m.Type == "Cosechadora")
                .ToListAsync();
            return Ok(cosechadoras);
        }

        [HttpGet("pulverizadoras")]
        public async Task<ActionResult<IEnumerable<Machine>>> GetPulverizadoras()
        {
            var pulverizadoras = await _context.Machines
                .Where(m => m.Type == "Pulverizadora")
                .ToListAsync();
            return Ok(pulverizadoras);
        }
    }
}
